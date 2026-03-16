import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { authDataContext } from "./AuthContext";
import { useContext } from "react";
import { userDataContext } from "./UserContext";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser, userData } = useContext(userDataContext);
  console.log(userData)

  useEffect(() => {
    if (!userData) return;
    const fetchWishlist = async () => {
      const res = await axios.get(
        serverUrl + "/api/wishlist/getWishlist/" + userData._id,
        { withCredentials: true },
      );
      setWishlist(res.data || []);
    };
    fetchWishlist();
  }, [userData]);


  const isWishlisted = (id) => {
    return wishlist?.some((item) => item.productId === id);
  };
  const toggleWishlist = async (product) => {
    if (!userData) {
      console.log("UserData not logged in");
      return;
    }

    const res = await axios.post(
      serverUrl + "/api/wishlist/toggle",
      {
        userId: userData._id,
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      },
      { withCredentials: true },
    );

    if (res.data.removed) {
      setWishlist((prev) =>
        prev.filter((item) => item.productId !== product.id),
      );
    } else {
      setWishlist((prev) => [...prev, res.data]);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, isWishlisted, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;

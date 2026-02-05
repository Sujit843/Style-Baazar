import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Card from "../components/Card";
import BottomFooter from "../components/BottomFooter";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-30 text-xl">
        ❤️ No items in wishlist
      </div>
    );
  }

  return (
    <>
    
    <div className="justify-center text-center p-6 mt-15">
        <p className="text-xl text-slate-500 font-semibold"> Your favorite items, saved for later</p>
        <div className="flex flex-wrap gap-6 justify-center p-6 ">
    {wishlist.map(item => (
        <Card key={item.id} {...item} />
    ))}
    </div>
    </div>
    <BottomFooter/>
    </>
  );
}

export default Wishlist;

import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Card from "../components/Card";
import BottomFooter from "../components/BottomFooter";
import Title from "../components/Title";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 pb-28 relative overflow-hidden">

        <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}}>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="relative max-w-[1400px] mx-auto px-5 md:px-12 pt-24 pb-10">

          <div className="mb-12">
            <p className="absolute top-16 left-5 md:left-12 text-[80px] md:text-[130px] font-black 
                          text-white/[0.03] leading-none select-none tracking-tighter uppercase pointer-events-none">
              WISH
            </p>
            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-rose-600/10 border border-rose-500/30 
                               text-rose-400 text-[11px] font-semibold tracking-[3px] uppercase 
                               px-4 py-2 rounded-full mb-4">
                <span className="w-[6px] h-[6px] rounded-full bg-rose-500 animate-pulse"></span>
                {wishlist.length > 0 ? `${wishlist.length} Item${wishlist.length > 1 ? 's' : ''}` : 'Empty'}
              </span>
              <Title text1={"MY"} text2={"WISHLIST"} />
            </div>
            <div className="mt-6 h-[1px] bg-gradient-to-r from-rose-500/40 via-zinc-700 to-transparent"></div>
          </div>

          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] gap-5 text-center">
              <div className="w-[90px] h-[90px] rounded-2xl bg-zinc-900 border border-zinc-800 
                              flex items-center justify-center">
                <span className="text-[36px] opacity-30">❤️</span>
              </div>
              <div>
                <p className="text-[22px] font-black text-white">Your Wishlist is Empty</p>
                <p className="text-zinc-500 text-[14px] mt-1">Save your favourite items for later</p>
              </div>
            </div> 
          ) : (
            <>
              <p className="text-zinc-500 text-[13px] tracking-wider mb-8">
                Your favourite items, saved for later
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item._id}
                    className="group relative rounded-2xl overflow-hidden 
                               bg-zinc-900 border border-zinc-800 
                               hover:border-rose-500/40 hover:-translate-y-1 
                               transition-all duration-300 hover:shadow-[0_20px_60px_rgba(225,29,72,0.12)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    </div>
                    <Card
                      id={item.productId}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-14 flex items-center justify-between">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
                <span className="mx-5 text-zinc-600 text-[11px] tracking-[4px] uppercase font-medium">Style Baazar</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-800 to-transparent"></div>
              </div>
            </>
          )}
        </div>
      </div>

      <BottomFooter />
    </>
  );
}

export default Wishlist;
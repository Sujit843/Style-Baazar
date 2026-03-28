import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

const backgrounds = [back1, back2, back3, back4];

// Pehli image preload karo — page load hone se pehle
const preloadFirstImage = new Image();
preloadFirstImage.src = backgrounds[0];

function Background({heroCount}) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-zinc-900">
            
            {backgrounds.map((bg, index) => (
                <img
                    key={index}
                    src={bg}
                    alt={`Hero background ${index + 1}`}
                    fetchpriority={index === 0 ? "high" : "low"}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out
                        ${heroCount === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        </div>
    )
}

export default Background
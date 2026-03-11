import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Background({heroCount}) {
    const backgrounds = [back1, back2, back3, back4];
    
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img 
                src={backgrounds[heroCount]} 
                alt={`Hero background ${heroCount + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out animate-[zoom-in_0.7s_ease-out_forwards]"
                key={heroCount}
            />

            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
    )
}

export default Background
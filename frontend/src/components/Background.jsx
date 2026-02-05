import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

const images = [
    {i1: "https://res.cloudinary.com/dpmhuwzdm/image/upload/v1768805677/back1_m0lkft.webp"},
    {i1: "https://res.cloudinary.com/dpmhuwzdm/image/upload/v1768805677/back1_m0lkft.webp"},
    {i1: "https://res.cloudinary.com/dpmhuwzdm/image/upload/v1768805677/back1_m0lkft.webp"},
    {i1: "https://res.cloudinary.com/dpmhuwzdm/image/upload/v1768805677/back1_m0lkft.webp"},
]

function Background({heroCount}) {
    const backgrounds = [back1, back2, back3, back4];
    
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img 
                src={backgrounds[heroCount]} 
                alt={`Hero background ${heroCount + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out animate-zoom-in"
                key={heroCount}
            />
        

            <div className="absolute bottom-0 left-0 right-0 h-[200px]"></div>

            <style jsx>{`
                @keyframes zoom-in {
                    from {
                        transform: scale(1.1);
                        opacity: 0.7;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-zoom-in {
                    animation: zoom-in 0.7s ease-out forwards;
                }
            `}</style>
        </div>
    )
}

export default Background
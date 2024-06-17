import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useState } from "react"
export default function Carousel({ images, children }){
    let [currentImage, setCurrentImage] = useState(0)
    let previousImage = () =>{
        if (currentImage === 0) setCurrentImage(images.length - 1)
        else setCurrentImage(currentImage - 1)
    }

    let nextImage = () =>{
        if (currentImage === images.length -1) setCurrentImage(0)
        else setCurrentImage(currentImage + 1)
    }

    return(
        <div className="overflow-hidden relative">
            <div className={`flex transition ease-out duration-300`}
            style={{
                transform: `translateX(-${currentImage*100}%)`
            }}>
            {}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousImage}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextImage}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>
        </div>
    )
}
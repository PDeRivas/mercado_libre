import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useState } from "react"
import Card from "./Card"
export default function Carousel({ children }){
    let [currentImage, setCurrentImage] = useState(0)
    let previousImage = () =>{
        if (currentImage === 0) setCurrentImage(children.length - 1)
        else setCurrentImage(currentImage - 1)
    }

    let nextImage = () =>{
        if (currentImage === children.length -1) setCurrentImage(0)
        else setCurrentImage(currentImage + 1)
    }

    return(
        <div className="overflow-hidden relative">
            <div className='flex transition ease-out duration-300' style={{ transform: `translateX(-${currentImage*10}%)`}}>
                { children.map((producto)=>{
                    let datos = {title:producto.title, price:producto.price, thumbnail:producto.thumbnail}
                    return <Card>{ datos }</Card>
                })}
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
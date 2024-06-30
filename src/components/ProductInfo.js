import React from "react"
import Carousel from "./Carousel"
import addProduct from "./addProduct"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ProductInfo(data) {
    let [productId, setProductId] = useState(data.productId)
    let [product, setProduct] = useState({pictures: ['']})
    let [productTitle, setProductTitle] = useState('')
    let [productPrice, setProductPrice] = useState('')
    let [productThumbnail, setProductThumbnail] = useState('')
    let [quantity, setQuantity] = useState(1)
    let navigate = useNavigate()

    useEffect(()=>{
        apiBusqueda(productId);
    }, []) 
    
    let apiBusqueda = async (valorBuscado) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/items/${valorBuscado}`);
        const json = await response.json();
        const producto = json

        setProduct(producto)
        setProductTitle(producto.title)
        setProductPrice(producto.price)
        setProductThumbnail(producto.thumbnail)
        setProductTitle(producto.title)
    } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    let changeInput = (event) => {
        let input = event.target.value
        if (!isNaN(input)){
            setQuantity(input)
        }
    }


    return (
        <div className="bg-white">
            <div className="pt-6 w-full">
                <div className="flex justify-center">
                <div>
                <div className="w-72 flex-shrink-0">
                    <Carousel autoSlide={false} >
                        {[...product.pictures.map((s, index) => (
                            <div key={index}className="h-72 w-72 flex items-center justify center flex-shrink-0" >
                            <img src={s.url} alt={`Product image ${index+1}`} className="w-full h-full object-center" />
                            </div>
                        ))
                        ]}
                    </Carousel>
                </div>
                </div>
                </div>

                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productTitle}</h1>
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Informacion del Producto</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${productPrice}</p>

                        <form className="mt-10">
                            <div className="flex justify-center">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    if(quantity > 0){
                                    setQuantity(quantity-1)}}}>
                                    <FontAwesomeIcon icon={faMinus}/>
                                </button>
                                <input onChange={changeInput} className="w-12 aspect-[1/1]" value={quantity} disabled/>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 ml-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setQuantity(quantity+1)}}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>

                            <button 
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={(e)=>{
                                    addProduct(productId, productTitle, productPrice, productThumbnail, quantity)
                                    navigate('/cart')
                                }}>
                                Añadir al Carrito</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


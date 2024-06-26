import React from "react"
import Carousel from "./Carousel"
import addProduct from "./addProduct"

export default class ProductInfo extends React.Component {
    constructor(data){
        super()
        this.state = {
            productId: data.productId,
            productTitle: '',
            productPrice: '',
            productThumbnail: '',
            product: {pictures:[]},
            quantity: 1,
        }
    }

    componentDidMount() {
        this.apiBusqueda(this.state.productId);
    }
    
    apiBusqueda = async (valorBuscado) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/items/${valorBuscado}`);
        const json = await response.json();

        const producto = json

        this.setState({ product: producto });
        this.setState({ productTitle: this.state.product.title})
        this.setState({ productPrice: this.state.product.price})
        this.setState({ productThumbnail: this.state.product.thumbnail})
    } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    changeInput = (event) => {
        let input = event.target.value
        if (!isNaN(input)){
            this.setState({quantity: input})
        }
    }

  render(){
    return (
        <div className="bg-white">
            <div className="pt-6 w-full">
                <div className="flex justify-center">
                <div>
                <div className="w-72 flex-shrink-0">
                    <Carousel autoSlide={false} >
                        {[...this.state.product.pictures.map((s, index) => (
                            <div key={index}className="h-72 w-72 flex items-center justify center flex-shrink-0" >
                            <img src={s.url} alt={`Product image ${index+1}`} className="w-full h-full object-center" />
                            </div>
                        ))
                        ]}
                    </Carousel>
                </div>
                </div>
                </div>

                <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{this.state.productTitle}</h1>
                    </div>

                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 class="sr-only">Informacion del Producto</h2>
                        <p class="text-3xl tracking-tight text-gray-900">${this.state.productPrice}</p>

                        <form class="mt-10">
                            <input onChange={this.changeInput} value={this.state.quantity}/>
                            <button 
                                type="submit"
                                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    console.log(this.state.quantity)
                                    addProduct(this.state.productId, this.state.productTitle, this.state.productPrice, this.state.productThumbnail, this.state.quantity)
                                }}>
                                Añadir al Carrito</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )}
}


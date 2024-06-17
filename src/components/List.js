import React from "react"
import Card from "./Card"

export default class List extends React.Component {
    constructor(hello){
        super()
        this.state = {
            productos: [],
            valor: 'Moto',
        }
    }

    componentDidMount() {
        this.apiBusqueda(this.state.valor);
    }
    
    apiBusqueda = async (valorBuscado) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`);
        const json = await response.json();

        const productos = json.results

        this.setState({ productos: productos });
    } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

  render(){
    const { productos } = this.state
    return (
        <div className="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Resultados de: '{this.state.valor}'</h2>
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { productos.map((producto)=>{
                        return <Card title={producto.title} price={producto.price} thumbnail={producto.thumbnail}></Card>
                    }) }
                </div>
            </div>
        </div>
    )}
}

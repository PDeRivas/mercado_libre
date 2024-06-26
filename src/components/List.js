import React from "react"
import Card from "./Card"

export default class List extends React.Component {
    constructor(data){
        super()
        this.state = {
            productos: [],
            valor: data.searchValue
        }
    }

    componentDidMount() {
        this.apiBusqueda(this.state.valor);
    }
    
    apiBusqueda = async (valorBuscado) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`);
        const json = await response.json();

        const productos = json.results.slice(0, 8)

        this.setState({ productos: productos });
    } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

  render(){
    const { productos } = this.state
    return (
        <div className="bg-white mb-10">
            <div class="mx-auto max-w-2xl px-4 py-0 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { productos.map((producto)=>{
                        let datos = {title:producto.title, price:producto.price, thumbnail:producto.thumbnail, id:producto.id}
                        return <Card>{ datos }</Card>
                    }) }
                </div>
            </div>
        </div>
    )}
}


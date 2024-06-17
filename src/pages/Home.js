import Navbar from "../components/Navbar"
import React from "react"
import List from "../components/List"
import Card from "../components/Card"
import Carousel from "../components/Carousel"
export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      productos: []
    }
  }

  componentDidMount() {
    this.fetchApi('auto');
  }

  fetchApi = async (valorBuscado) => {
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
    <div className="App">
      <Navbar />
      <p className="text-3xl font-bold underline">Home</p>
      <List/>
      <Carousel>HOLAS</Carousel>
      {/* <ul>
      { productos.map((producto)=>{
          return <p>{ producto.title }</p>
        }) }
      </ul> */}
    </div>
  )}
}
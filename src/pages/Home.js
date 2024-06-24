import Navbar from "../components/Navbar"
import React from "react"
import List from "../components/List"

export default class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <List searchValue='Heladera'/>
        {/* <div className="w-[60%] m-auto">
          <Carousel>{ productos }</Carousel>
        </div> */}
        {/* <Card>{{ title:'123', price:'140', thumbnail:'https://preview.redd.it/serious-question-whats-the-difference-between-a-regular-v0-i0spnq2kl40a1.jpg?width=640&crop=smart&auto=webp&s=7ab6f45b51c8774efe1589d92b7cc5f90109f888' }}</Card> */}
        {/* <ul>
        { productos.map((producto)=>{
            return <p>{ producto.title }</p>
          }) }
        </ul> */}
      </div>
  )}
}
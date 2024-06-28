import Navbar from "../components/Navbar"
import React from "react"
import CartList from "../components/CartList"
import CartButtons from "../components/CartButtons"

export default function Cart(){
  let hayProductos = localStorage.getItem('cart') != null
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">{hayProductos ? 'Finalizar la Compra': 'Su carrito esta vacío, agregue productos para poder realizar una compra' }</h2>
      <CartList />
      {hayProductos ? <CartButtons />:[] }
    </div>
  )
}
import Navbar from "../components/Navbar"
import React from "react"
import List from "../components/List"

export default function Home(){
  let listaRecomendados = ['heladera', 'consolas', 'libros', 'celular', 'herramientas', 'ropa', 'muebles', 'alimentos', 'arte', 'mascotas', 'instrumentos', 'juguetes', 'peliculas', 'eventos', 'joyas', 'casas',]
  let recomendado = listaRecomendados[Math.floor(Math.random()*listaRecomendados.length)];
  return (
    <div className="App">
      <Navbar />
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">Recomendados para vos</h2>
      <List searchValue={recomendado}/>
    </div>
  )
}
import Navbar from "../components/Navbar"
import React from "react"
import List from "../components/List"

export default function Home() {
  let listaRecomendados = ['heladera', 'consolas', 'libros', 'celular', 'herramientas', 'tecnologia', 'muebles', 'alimentos', 'arte', 'mascotas', 'instrumentos', 'juguetes', 'peliculas', 'eventos', 'joyas', 'casas', 'computadoras', 'zapatillas', 'camionetas', 'camiones']
  let recomendado = listaRecomendados[Math.floor(Math.random() * listaRecomendados.length)];
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-12 mb-0">Recomendados para vos</h2>
      <List searchValue={recomendado} cantidad={8} />
    </div>
  )
}
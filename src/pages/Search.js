import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import List from "../components/List"

export default function Search() {
  let search = useParams().searchItem
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">Resultados de: {search}</h2>
      <List searchValue={search}/>
    </div>
  )
}
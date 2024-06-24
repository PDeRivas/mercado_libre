import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import List from "../components/List"

export default function Search() {
  let search = useParams().searchItem
  return (
    <div className="App">
      <Navbar />
      <List searchValue={search}/>
    </div>
  )
}
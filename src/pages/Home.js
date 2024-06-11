import Navbar from "../components/Navbar"
import Search from "../components/SearchBar"
import Combo from "../components/ComboBox"

const fetchApi = async () => {
    try {
        let respuesta = await fetch('aca va la api')
        let json = await respuesta.json()

        return json
    } catch (error) {
        console.error('Error:', error)
    }
}

export default function Home() {
  fetchApi()
    return (
      <div className="App bg-green-600">
        <Navbar />
        <p className="text-3xl font-bold underline">Home</p>
        <Search />
      </div>
    );
  }
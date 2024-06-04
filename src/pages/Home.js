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
    return (
      <div className="App">
        <p>Home</p>
      </div>
    );
  }
import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css";

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setcriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        //console.log(data)
        setcriptos(data.data.data)
      })
      .catch(() => {
        console.error("The request failed")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>List of cryptocurrencys</h1>
      <ol>
        {
          criptos.map(({ id, name, priceUsd }) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App;

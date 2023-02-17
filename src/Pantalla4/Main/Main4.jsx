import { useEffect, useState } from "react"
import Filtro4 from "./Componentes/Filtro4"
import ListaComidas from "./Componentes/ListaComidas"
import './Pantalla4.css'

function MainPage4() {
    
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerCategoriasAsyncAwait = async function(){
        try {
            const response = await fetch("https://my-json-server.typicode.com/Antrozi/Api_Categorias/categorias")
            const data = await response.json()
            setListaCategorias(data)
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }

    const filtrarPelicula = async function (categoriaId) {
        try {
            
            const response = await fetch(
                `http://localhost:8000/endpoints/platos/listar?categoria=${ categoriaId }`
            )
            const data = await response.json()
            console.log(data)
            if (data.error === ""){

                setListaPeliculas(data.platos)
            }else{
                console.error(data.error)
            }

        }catch(error) {
            console.error("Error de comunicacion")
        }
    }

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (0 == 1) {  
        }else {
            obtenerCategoriasAsyncAwait()
            filtrarPelicula(-1)
        }
    }, [])

    return <div className="container">
            <Filtro4
                categorias={ listaCategorias }
                onFiltrar={ filtrarPelicula } />
            <ListaComidas
                peliculas={ listaPeliculas } />
        </div>
}

export default MainPage4
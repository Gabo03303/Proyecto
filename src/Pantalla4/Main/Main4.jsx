import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filtro4 from "./Componentes/Filtro4"
import ListaComidas from "./Componentes/ListaComidas"

function MainPage4() {
    
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerCategoriasAsyncAwait = async function() {
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
            const response = await fetch("https://my-json-server.typicode.com/Antrozi/Api_Platos/comidas")
            const data = await response.json()

            let peliculas = data;
            if (categoriaId != -1) {
                peliculas = data.filter(function(pelicula) {
                    return pelicula.categoria == categoriaId
                })
            }
    
            setListaPeliculas(peliculas)
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }else {
            obtenerCategoriasAsyncAwait()
            filtrarPelicula(-1)
        }
    }, [])

    return location.state !== null 
        ? <div className="container">
            <Filtro4
                categorias={ listaCategorias }
                onFiltrar={ filtrarPelicula } />
            <ListaComidas
                peliculas={ listaPeliculas } />
        </div>
        : <div></div>

}

export default MainPage4
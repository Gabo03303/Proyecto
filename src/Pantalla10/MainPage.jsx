import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import Filtro from "./Components/Filtro"
import './Pantalla10.css'

function MaingPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])
    const [listaCategorias, setListaCategorias]= useState([])

    const ObtenerCategoriasAsynAwait = async function(){
        try{
            const response = await fetch("https://my-json-server.typicode.com/Antrozi/Api_Categorias/categorias")
            const data = await response.json()
            setListaCategorias(data)
        }catch(error){
            console.error("Error")
        }
    }

    const filtrarPelicula = async function(categoriaId){
        try{
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
        }catch(error){
            console.error("Error")
        }
    }


    useEffect(function(){

        if (0 == 1){
        }else{
            ObtenerCategoriasAsynAwait()
            filtrarPelicula(-1)
        }
    },[])
    
    return <div className="container">  
        <Filtro 
            categorias = { listaCategorias }
            onFiltrar = { filtrarPelicula }/>
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
        <div className="d-flex justify-content-center">
            <a href="/Pantalla13" className="btn btn-primary mt-4">Registrar Plato</a>
        </div>
    </div>
}

export default MaingPage
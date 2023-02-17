import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"



function MaingPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])

    const filtrarPelicula = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/pedidos/listar")
            const data = await response.json()
            setListaPeliculas(data.categorias)
        }catch(error){
            console.error("Error")
        }
    }


    useEffect(function(){

        if (1 == 0){
        }else{
            filtrarPelicula()
        }
    },[])
    
    return <div className="container">  
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
    </div>
}

export default MaingPage
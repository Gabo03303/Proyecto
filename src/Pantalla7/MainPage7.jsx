import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import Pantallita from "./Pantallita"



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
    
    return <div>
        
        <Pantallita/>
        <br/><br/>
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>

        <br/><br/>
    </div>
}

export default MaingPage
import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import './Sorpresa.css'

function MaingPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])


    const filtrarPelicula = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/comentarios/listar")
            const data = await response.json()
            setListaPeliculas(data.comentarios)

        }catch(error){
            console.error("Error")
        }
    }


    useEffect(function(){

        if (0 == 1){
        }else{
    
            filtrarPelicula()
        }
    },[])
    
    return <div className="testimonios">  
        
        <div className='testimonios_header'>
          <h1>Comentarios</h1>
        </div>
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
    
    </div>
}

export default MaingPage
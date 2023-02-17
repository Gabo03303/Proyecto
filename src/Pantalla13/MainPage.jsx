import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import './Pantalla13.css'


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

        if (0 == 1){
        }else{
    
            filtrarPelicula()
        }
    },[])
    
    return <div className="container">  
        
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
        <div class="d-flex justify-content-center">
            <a href="/Pantalla16" className="btn btn-primary mt-4">Registrar entrega</a>
        </div>
        <br/>
    </div>
}

export default MaingPage
import './Card.css'

function CardPelicula(props){

    return <div className='d-flex justify-content-center'>
        <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Jalea_mixta.JPG" class="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="d-flex justify-content-center card-text">{ props.pelicula.nombre }</p>
        </div>
        </div>
    </div>
    
}

export default CardPelicula
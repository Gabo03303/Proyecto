

function CardPelicula(props){

    return <div className="card mb-4">
        <img src="#" className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">{props.pelicula.id}</p>
            <a href="#" className="btn btn-outline-secondary rounded-0"> Ver mas</a>
    </div>
</div>
}

export default CardPelicula
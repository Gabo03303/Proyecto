function CardRest(props) {
    return <div className="card mb-3">
        <img src={ props.pelicula.url } 
            className="card-img-top img-fluid" 
            alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">Hecho con la mejor sazón peruana.</p>
            <p className="card-text"><small className="text-muted">Disponible</small></p>
            <a href="/pantalla6" className="btn btn-outline-secondary rounded-0"> añadir al carrito</a>
        </div>
    </div>
}

export default CardRest
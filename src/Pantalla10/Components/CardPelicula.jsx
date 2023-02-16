function CardPelicula(props){

    return <div className="card mb-4">
        <img src={ props.pelicula.url } className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reiciendis accusantium. Dolore cum tenetur, quasi consectetur ab non itaque voluptates commodi enim molestias quidem eligendi facere</p>
            <a href="#" className="btn btn-outline-secondary rounded-0"> Ver mas</a>
    </div>
</div>
}

export default CardPelicula
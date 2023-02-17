function CardPelicula(props){

    return <div class="bg-light">
    <div class="descripcion">
        <h4>{ props.pelicula.nombre }</h4>
        <p>{props.pelicula.correo}</p>
        <p>{props.pelicula.resenia}</p>
    </div>
</div>
}

export default CardPelicula
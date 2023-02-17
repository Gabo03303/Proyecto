function CardPelicula(props){

    return <div class="plato-carta bg-light">
    <div class="img-plato-carta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Jalea_mixta.JPG" alt=""/>
    </div>
    <div class="descripcion">
        <h4>{ props.pelicula.nombre }</h4>
        <p>Nombre: Antony</p>
        <p>Direccion: Lorem, ipsum dolor.</p>
        <p>Numero de telefono: 979123043</p>
        <p>Codigo de verificación: 32141234VSD</p>
    </div>
    <div class="precio">
        <span>S/.25</span>
    </div>
</div>
}

export default CardPelicula
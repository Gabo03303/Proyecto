import { Link } from "react-router-dom"

function Menu(){
    return <div>

        {/*<ul classNameName="nav nav-tabs justify-content-end" id="cabecera" style={{border: "hidden;"}}>
                    <li classNameName="nav-item">
                        
                        <Link to={"/pantalla3"} classNameName="nav-link active" aria-current="page" style={{border: "hidden;"}}>Pagina Principal</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/sorpresa"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Reseña</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pantalla6"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Carrito</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pantalla16"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Ver Pedido</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Cerrar Sesion</Link>
                    </li>
</ul>*/}
        <nav class="nav justify-content-end" id="cabecera" style={{border: "hidden;"}}>
                        <Link to={"/pantalla3"} classNameName="nav-link active" aria-current="page" style={{border: "hidden;"}}>Pagina Principal</Link>
                        <Link to={"/sorpresa"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Reseña</Link>
                        <Link to={"/pantalla6"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Carrito</Link>
                        <Link to={"/pantalla16"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Ver Pedido</Link>
                        <Link to={"/"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Cerrar Sesion</Link>
                    </nav>

    </div>
}
export default Menu
import { Link } from "react-router-dom"
import './Sorpresa.css'

function Sorpresa(){
    return <div>
        {/*<ul classNameName="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
            <li classNameName="nav-item">
                <Link to={"/mpc"} classNameName="nav-link active" aria-current="page" style="border: hidden;">Pagina Principal</Link>
            </li>
            <li classNameName="nav-item">
                <Link to={"/resenia"} className="nav-link active" aria-current="page" style="border: hidden;">Reseña</Link>
            </li>
            <li classNameName="nav-item">
                <Link to={"/carrito"} className="nav-link active" aria-current="page" style="border: hidden;">Carrito</Link>
            </li>
            <li classNameName="nav-item">
                <Link to={"/verPedido"} className="nav-link active" aria-current="page" style="border: hidden;">Ver Pedido</Link>
            </li>
            <li classNameName="nav-item">
                <Link to={"/lpc"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
            </li>
</ul>*/}
        <form>
            <div className="mb-4 m-sm-3" >
                <label for="email" className="form-label">Usuario</label>
                <input type="email" className="form-control" name="email"/>
            </div>
            <div className="mb-4 m-sm-3">
                <label for="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" name="email"/>
            </div>
            <div className="mb-4 m-sm-3">
                <label for="coment" className="form-label">Comentario</label>
                <input type="text" className="form-control" name="coment"/>
            </div>
            <div className="d-grid m-sm-3">
                <button type="submit" className="btn btn-primary">Añadir Comentario</button>
            </div>
        </form>
        <section className="testimonios">
    <div className="testimonios_header">
      <h1>Clientes dicen</h1>
    </div>
    <div className="testimonios_contenedor">
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>Juan Perez</strong>
              <span>jperez@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Experiencia increible la Rosa Nautica. Muy rico la comida</p>
        </div>
      </div>
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>Jose Alvarez</strong>
              <span>jalvarez@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Platillos ricos en el chifa Madam Tusan. Recomendado.</p>
        </div>
      </div>
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>Nicolas Rodriguez</strong>
              <span>nrodriguez@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Buenas hamburguesas a bajos precios en Bembos.</p>
        </div>
      </div>
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>Lucas Matos</strong>
              <span>lmatos@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Tienen variedad de pizzas en Pizza Hut pero demoran en llegar.</p>
        </div>
      </div>
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>Patricio Mendez</strong>
              <span>pmendez@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Primera experiencia en el Embarcadero 41 y la atencion por parte del personal es muy grata.</p>
        </div>
      </div>
      <div className="testimonios_caja">
        <div className="caja_top">
          <div className="perfil">
            <div className="name-user">
              <strong>John Roberts</strong>
              <span>jroberts@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="comentarios_clientes">
          <p>Un clásico pollo de Norky's nunca decepciona.</p>
        </div>
      </div>
    </div>
  </section>
    </div>
}

export default Sorpresa
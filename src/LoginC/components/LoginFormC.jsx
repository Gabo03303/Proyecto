import { useState } from "react";
import { Link } from "react-router-dom"

function LoginFormC(props){
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("Correo:", correo)
        console.log("Password:", password)
        props.onLoginOk(correo, password)
    }

    return <form>
        <div className="mb-4">
            <label className="form-label">Correo</label>
            <input class="form-control" name="text"
                value={correo}
                onChange={function(evt) {setCorreo(evt.target.value)}}/>
        </div>
        <div className="mb-4">
            <label className="form-label">Password:</label>
            <input className="form-control" type="password"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
        </div>
        <div className="d-grid">
            <button className="btn btn-primary" type="button"
                onClick={ butOnClick }>
                Iniciar Sesion
            </button>
        </div>
        <div className="my-3">
            <Link to={"/pantalla9"}>No eres usuario cliente?</Link>
        </div>
    </form>
}


export default LoginFormC
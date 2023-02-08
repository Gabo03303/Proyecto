import { useState } from "react"

function LoginForm4(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div>
            <h1>Bienvenido Cliente</h1>
            <label className="form-label mt-2">NOMBRE:</label>
            <input className="form-control" type="text"
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } } />
        </div>
        <div>
            <label className="form-label mt-3">SU NUMERO DE TELEFONO:</label>
            <input className="form-control" type="text"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
            <label className="form-label ">se le enviará un QR para ver la carta</label>
            
        </div>
        <button className="btn btn-success mt-3" type="button"
            onClick={ butOnClick }>
            VER CARTA
        </button>
        
    </form>
    
}

export default LoginForm4
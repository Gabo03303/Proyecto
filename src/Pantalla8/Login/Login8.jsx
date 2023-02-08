import { useNavigate } from "react-router-dom"
import LoginForm8 from "./Componentes/LoginForm8" 

function LoginPage8() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "74229263" 
            && password === "ABC-123") {

            navigate("/main")
        }
    }
    
    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm8
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage8
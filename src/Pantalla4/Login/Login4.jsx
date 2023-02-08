import { useNavigate } from "react-router-dom"
import LoginForm4 from "./Componentes/LoginForm4"

function LoginPage4() {


    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "Antony" 
            && password === "901757150") {

            navigate("/main2", {
                state : {
                    username : usuario
                }
            })
        }
    }

    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm4
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage4
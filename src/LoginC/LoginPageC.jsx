import { useNavigate } from "react-router-dom"
import LoginFormC from "./components/LoginFormC"

function LoginPageC(){
    const navigate = useNavigate()

    const onLoginOk = function(
        correo, password
    ){
        if(correo === "pw@aloe.ulima.edu.pe"
            && password === "ulima"){
                const dataUsuario = {
                    correo: correo,
                    password: password
                }

                const dataUsuarioJSON = JSON.stringify(dataUsuario)
                console.log(dataUsuario)
                console.log(dataUsuarioJSON)
                sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

                navigate("/pantalla3", {
                    state: {
                        username: correo
                    }
                })
            }
    }

    return <div className="container w-75 mt-5 rounded">
        <div className="row align-items-stretch">
            <div className="col">
                <h2 className="fw-bold text-center py-5">Login Cliente</h2>
                <LoginFormC onLoginOk={onLoginOk}/>
            </div>
        </div>
    </div>

}

export default LoginPageC
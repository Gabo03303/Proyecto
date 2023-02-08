import { useNavigate } from "react-router-dom"
import LoginFormR from "./components/LoginFormR"

function LoginPageR(){
    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ){
        if(usuario === "admin"
            && password === "admin"){
                const dataUsuario = {
                    usuario: usuario,
                    password: password
                }

                const dataUsuarioJSON = JSON.stringify(dataUsuario)
                console.log(dataUsuario)
                console.log(dataUsuarioJSON)
                sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

                navigate("/Pantalla10", {
                    state: {
                        username: usuario
                    }
                })
            }
    }

    return <div className="container w-75 mt-5 rounded">
        <div className="row align-items-stretch">
            <div className="col">
                <h2 className="fw-bold text-center py-5">Login Restaurante</h2>
                <LoginFormR onLoginOk={onLoginOk}/>
            </div>
        </div>
    </div>

}

export default LoginPageR
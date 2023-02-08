function Pantalla6(){
    return <div>
        <div className="d-flex justify-content-center">
            <h1>Carrito de Compras</h1>
        </div>
        <div className="container pt-4">
            <div className="d-flex justify-content-center">
                <strong><h4>Datos del Pedido</h4></strong>
            </div>
            <form className="row g-3">
                <div className="col-12">
                    <label for="inputAddress" className="form-label"><strong><h4>NOMBRE: JOSE MIGUEL </h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>NUMERO DE TELEFONO: 901 234 123</h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>DIRECCION: SANTIAGO DE SURCO 138 </h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>METODO DE PAGO: TARJETA </h4></strong></label>
                </div>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">CANTIDAD</th>
                        <th scope="col">CATEGORIA</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">4</th>
                        <td>HAMBURGUESA</td>
                        <td>ROYAL</td>
                        <td>S/ 18.00</td>
                        <td>S/ 72.00</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>HAMBURGUESA</td>
                        <td>A LO POBRE</td>
                        <td>S/ 22.00</td>
                        <td>S/ 88.00</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>HAMBURGUESA</td>
                        <td>CLASICA</td>
                        <td>S/ 15.00</td>
                        <td>S/ 45.00</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>PIZZA</td>
                        <td>HAWAIANA</td>
                        <td>S/ 29.99</td>
                        <td>S/ 59.98</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>PIZZA</td>
                        <td>SUPREMA</td>
                        <td>S/ 34.99</td>
                        <td>S/ 69.98</td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                        <td>PASTA</td>
                        <td>LASAGNA</td>
                        <td>S/ 20.99</td>
                        <td>S/ 20.99</td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="4">TOTAL A CANCELAR</th>
                        <td >S/ 355.95</td>
                        </tr>
                    </tbody>
                    </table>
                <div className="d-flex justify-content-center">
                    <a href="/pantalla7" className="btn btn-primary mt-4">Confirmar pedido</a>
                </div>
            </form>
            <br/>
        </div>

    </div>
}

export default Pantalla6
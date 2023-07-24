import React from 'react'

const Hombres = () => {
  return (
    <>
    <div>Hombres</div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/unisex.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/femeninas3.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/masculinas2.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/femeninas4.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/masculinas3.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/femeninas5.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/gucci.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/unisex2.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/masculinas6.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>





    <div className="card text-white bg-primary">
      <div className="card-body">
        <h4 className="card-title">Registrate y Consulta tus Ofertas Especiales de catalogo en perfumes para Hombres</h4>
        <p className="card-text"></p>
      </div>
    </div>
  
      
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-12 col-md4 col-lg-4 col-xl-4 py-5 bg-ligt">        
          <h2>Consulta como Usuario</h2>
          <form>
              <div className="mb-3">
                  <label for="nombre" className="form-label">Email</label>
                  <input type="texto" className="form-control" id="nombre" placeholder="Ingresa tu Email" />
                </div>
                <div className="mb-3">
                  <label for="rut" className="form-label">Rut</label>
                  <input type="texto" className="form-control" id="rut" placeholder="ingrese su Rut" />
                </div>
                <div className="mb-3">
                  <label for="descripcion" className="form-label">Descripcion de su Solicitud</label>
                  <textarea className="form-control" id="descripcion" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label for="fragancia" className="form-label">Nombre del perfume</label>
                  <input type="texto" className="form-control" id="frangancia" placeholder="perfume" />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Guardar</button>
                  <button className="btn btn-secondary">Limpiar</button>
                </div>                      
          </form>
        </div>
  
        <div className="col-sm-12 col-md8 col-lg-8 col-xl-8 py-5 bg-white">
          <h2>Listado de Precios y Ofertas </h2>
          <table className="table table-dark table-striped">
  
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fragancias</th>
                    <th>Cantidad de Fragancias</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>CAROLINA HERRERA BAD BOY EDP 100ml</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>VERSACE EROS EDT 100 ml </td>
                    <td>5</td>
                </tr>
                <tr>  
                    <td>3</td>
                    <td>EMPORIO ARMANI STRONGER WITH YOU EDP 50Ml</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>AZARRO CHROME EDT 100ml</td>
                    <td>8</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>CAROLINA HERRERA FOR MEN EDP 100ml</td>
                  <td>14</td>
              </tr>
              <tr>
                  <td>6</td>
                  <td>VERSACE POUR HOMME EDT 100 ml </td>
                  <td>2</td>
              </tr>
              <tr>
                  <td>7</td>
                  <td>HALLOWEEN MAN SHOT EDP 125 ml</td>
                  <td>12</td>
              </tr>
              <tr>
                  <td>8</td>
                  <td>MERCEDES BENZ LE PARFUM EDP 125ml</td>
                  <td>9</td>
              </tr>
  
            </tbody>
          </table>
          <table>
              
            <thead>
  
            </thead>
  
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hombres
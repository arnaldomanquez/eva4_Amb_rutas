import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const inicio = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/perfume2.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/varios.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/perfume6.png" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="img/perfume5.jpg" className="d-block w-100" width="430px" height="430px" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="card text-white bg-primary">
      <div className="card-body">
        <h4 className="card-title">Ofertas de perfumes  para Hombre, Mujer y unisex</h4>
        <p className="card-text"></p>
      </div>
    </div>
  
         
    <div className="row row-cols-1 row-cols-md-3 g-4 py-4">
      <div className="col">
        <div className="card h-100">
          <img src="img/bleu de chanel.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">BLUE DE CHANEL 100ml $ 105.000.-</h5>
            <p className="card-text">fragancia de la familia olfativa Amaderada Aromática.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Última actualización hace 15 minutos</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="img/purr_kperry.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">PURR KATTY PERRY 175ml $ 55.000</h5>
            <p className="card-text">fragancia de la familia olfativa Floral Frutal para Mujeres.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Última actualización hace 15 minutos</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="img/can_can.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CAN CAN PARIS HILTON 100ml $ 60.000</h5>
            <p className="card-text">fragancia de la familia olfativa Floral Frutal para Mujeres.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Última actualización hace 15 minutos</small>
          </div>
        </div>
      </div>
    </div>
    
    <div className="card text-white bg-primary">
      <div className="card-body">
        <h4 className="card-title">Registrate para Ofertas Especiales de catalogo en perfumes para Hombre, Mujer y unisex</h4>
        <p className="card-text"></p>
      </div>
    </div>
  
      
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-12 col-md4 col-lg-4 col-xl-4 py-5 bg-white">        
          <h2>Regitrate como Usuario</h2>
          <form>
              <div className="mb-3">
                  <label for="nombre" className="form-label">Nombre</label>
                  <input type="texto" className="form-control" id="nombre" placeholder="Nuevo Cliente" />
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
          <table className="table table-white table-striped">
  
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
                    <td>CAROLINA HERRERA GOOD GIRLS EDP 100ml</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>VERSACE EROS EDT 100 ml </td>
                    <td>5</td>
                </tr>
                <tr>  
                    <td>3</td>
                    <td>EMPORIO ARMANI BECOUSE IT's YOU EDP 50Ml</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>AZARRO CHROME EDT 100ml</td>
                    <td>8</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CAROLINA HERRERA FOR MEN EDP 100ml</td>
                  <td>14</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>VERSACE POUR HOMME EDT 100 ml </td>
                  <td>2</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>BRITNEY SPEARS FANTASY BY NIGTH EDP 100Ml</td>
                  <td>12</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>MERCEDES BENZ LE PARFUM EDp 125ml</td>
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
  
  
  
  
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner py-4">
        <div className="carousel-item active">
          <img src="img/oferta1.jpeg" className="d-block w-25" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>OFERTAS ESPECIALES </h5>
            <p>PERFUME DE HOMBRE JUVENIL HALLOWEEN MEN DE 200 ML.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/oferta2.jpeg" className="d-block w-25" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>OFERTAS ESPECIALES</h5>
            <p>PERFUME DE HOMBRE ANTONIO BANDERAS BLUE SEDUCTION DE 100 ML.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/oferta3.jpeg" className="d-block w-25" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>OFERTAS ESPECIALES</h5>
            <p>PERFUME DE HOMBRE ANTONIO BANDERAS BLACK SEDUCTION DE 100 ML.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    <div className="container-fluid bg-dark text-center p-4 text-white">
      <p className="small">Comercial AVMB EIRL, Rut N° 14.108.944-7, domiciliada en Avenida Granaderos # 4267 villa Ayquina, comuna de Calama, Precios publicados aplican exclusivamente a Internet.</p>
      <p className="small">&copy; Todos Los Derechos Reservados :: AVMB  :: CHILE 2023</p>
    </div>
  


    </>


  )
}

export default inicio
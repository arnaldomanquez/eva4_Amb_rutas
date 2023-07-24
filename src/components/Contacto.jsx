import React from 'react'

const Contacto = () => {
  return (
    <>
    

        <div>Contacto</div>

        <div className="box1">
            <div className="mb-1">
                <label for="et1" className="form-label">Marca del Perfume : </label>
                <input type="text" className="form-control" id="nombrePerfume" required /><br/>
            </div>
            <div className="mb-2">
                <label for="et2" className="form-label">Detalle del Perfume  : </label>
                <input type="text" className="form-control" id="nombreDetalle" required /><br />
            </div>
            <div>
                <label for="et2" className="form-label">Genero : </label>
            </div>
            <div className="form-check">
                <label className="form-check-label" for="radio1">
                    Hombre
                </label>
                <input type="radio" className="form-check-input" name="opt" id="radio1" value="Hombre" checked />
            </div>
            <div className="form-check">
                <label className="form-check-label" for="radio2">
                    Mujer
                </label>
                <input type="radio" className="form-check-input" name="opt" id="radio2" value="Mujer" />
            </div>
            <div className="form-check">
                <label className="form-check-label" for="radio3">
                    Unisex
                </label>
                <input type="radio" className="form-check-input" name="opt" id="radio3" value="Unisex" />
            </div><br />
            
            <div className="mb-4">
                <label for="est" className="form-label">Situacion : </label><br />
                <select id="est" name="est">
                    <option selected="selected">Selecciona la Situacion</option>
                    <option value="true">Nuevo</option>
                    <option value="false">Antiguo</option>
                </select>
            </div>
            <div className="mb-5">
                <label for="et5" className="form-label">Cantidad : </label><br />
                <select id="edd" name="edd">
                    <option selected="selected">Selecciona la Cantidad
                    </option>
                </select>
            </div>
            <div>
                <button type="submit" name="btn1" className="btn btn-success" onclick="agregarPerfume();">Agregar Perfume</button>&nbsp;
                <button type="submit" name="btn2" className="btn btn-success" onclick="verPerfumes();">Ver Perfumes</button>
            </div>
        </div>

        <div className="box2">
                <div className="mb-1">
                    <label for="et1" className="form-label">Ingrese información : </label>
                    <input type="text" className="form-control" id="info" /><br/>
                </div>

                <div>
                    <button type="submit" name="btn1" className="btn btn-success" onclick="consultarInfo();">Consultar Informacion</button>&nbsp;
                </div>
            </div>

    
    </>
  )
}

export default Contacto
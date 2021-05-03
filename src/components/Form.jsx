import React from 'react';


const Form = () =>{
        return(
        <div class="form">
            <form>
                <label for="numero">Número</label>
                <small>- (Ingrese numero del 1 al 13)</small>
                <select id="numero" name="numero">
                    <option disabled selected>Elija número</option>
                </select>

                <hr></hr>

                <label for="descripcion">Carta</label>
                <input type="text" id="descripcion-carta" name="descripcion" placeholder="Descripción de la carta"></input>

                <input id="guardar" type="button" value="Guardar" onclick="guardarCarta()"></input>
            </form>
        </div>
        );           
}
export default Form;
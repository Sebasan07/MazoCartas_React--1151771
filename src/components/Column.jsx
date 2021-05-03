import React, { Fragment } from 'react';
import Tabla from "./Tabla";
import Grid from "./Grid";
import Form from "./Form";

const Column = () =>{
        return(
            <Fragment>
            <div class="column">
                <Grid/>
            </div>
            <div class="column">
                <div>
                <Tabla/>
                </div>
                <Form/>
            </div>
            </Fragment>
        );           
}
export default Column;
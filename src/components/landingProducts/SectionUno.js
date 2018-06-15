import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SectionUno extends Component{
    render(){
        return(
            <header className="headerProduct" id={"inicio"} >
                <div className={"topright"}>
                    <Link to={'/landing'} className={"linkColor"}>
                        <span>Inicio</span>
                    </Link>
                    <Link to={'/productos'} className={"linkColor"}>
                        <span>Productos</span>
                    </Link>
                    <Link to={'/carrito'} className={"linkColor"}>
                        <span>Carrito</span>
                    </Link>
                </div>

                <div >
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">ARNUR-SHOP</span>
                        <span className="heading-primary--sub">Compra en linea de forma <strong>SEGURA</strong></span>
                    </h1>
                </div>
            </header>
        );
    }
}

export default SectionUno;
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./item.css"
import React, {useState} from "react";

const prodImg = require.context("./img", true);

    const Item = ({prod}) => {

    const[producto, setProducto] = useState({})

    const clickDetail = () => {
            console.log(producto)
            setProducto();
            return <ItemDetailContainer/>
        };    
        return (
            <>
                <div className="card mb-3">
                    <img src= {prodImg(`./${prod.img}`)} className="card-img-top foto" alt="producto"/>
                <div className="card-body">
                    <h5 className="card-title nombre">{prod.nombre}</h5>
                    <p className="info" onClick={clickDetail}>Mas Informacion</p>
                    {/* <p className="card-text descripcion">{prod.descripcion}</p>
                    <p className="card-text precio"><small className="text-muted">$ {prod.precio}</small></p>  */}
                </div>
                </div>        
            </>                
        );};
    export default Item;   


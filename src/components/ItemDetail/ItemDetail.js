// import Counter from "../Counter/Counter";
import "./itemDetail.css";

// const prodImg = require.context("./img", true);

const ItemDetail = ({producto})=> {
    console.log(producto)
    return ( 
        <div>  
            HOla
            
            {/* <div className="card mb-3 conte">
            <div className="row g-0">
                <div className="col-md-4">
                <img src= "../img/torta1-250x250.jpg" className="fotoModal" alt={producto.nombre}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text"><small className="text-muted">$ {producto.precio}</small></p>
                    <Counter />
                </div>
                </div>
            </div>
            </div> */}
        </div>    
    );       
};
export default ItemDetail;



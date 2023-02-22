import Counter from "../Counter/Counter";
import "./itemDetail.css";

const prodImg = require.context("./img", true);

const ItemDetail = ({producto})=> {
    return ( 
        <>  
            <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{producto.nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src= {prodImg(`./${producto.img}`)} className="fotoModal" alt="producto"/>
                    <p>{producto.descripcion}</p>
                    <p>{producto.precio}</p>
                    <Counter prop = {producto.sotck}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>       
        </>    
    );       
};
export default ItemDetail;
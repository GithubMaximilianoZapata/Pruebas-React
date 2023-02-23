
import "./item.css"

    const Item = ({prod}) => {
                 
        return (
            <>      
                <div className="card mb-3">
                <img src= {prod.img} className="card-img-top foto" alt= {prod.nombre} />
                <div className="card-body">
                    <h5 className="card-title nombre">{prod.nombre}</h5>
                    <p className="card-text info">MAS INFORMACION</p>                    
                </div>
                </div> 
            </>                 
        );
    };
    export default Item;   


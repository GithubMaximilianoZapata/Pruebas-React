import React, {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
const product =            
    {
        id: "1",
        img: "torta1-250x250.jpg",
        nombre: "Tortas para Eventos",
        descripcion: "Esta es una torta cubierta por diferentes cremas para eventos de alta concurrencia.",
        precio: 500,
        cantidad: "1",
        categoria: "Torta",
        stock: 15
    };

const ItemDetailContainer = () => {
        const [producto, setProd] = useState([]);
        useEffect(() => {
          const promise = new Promise((resolve) => {
            setTimeout(() => {
              resolve(product);
            }, 2000);
          });  
          promise.then((res) => {
            setProd(res);
          });
      }, []);
      return <ItemDetail prop={producto}/>;
    };
    export default ItemDetailContainer;
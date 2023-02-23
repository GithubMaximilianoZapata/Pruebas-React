import "./ItemListContainer.css";
import React, {useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
    const [prod, setProd] = useState([]);
    useEffect(() => {
      fetch("../products.json")
      .then((res)=> res.json())
      .then((e)=> setProd(e))
  }, []);
  return <ItemList prod={prod}/>;
};
export default ItemListContainer;
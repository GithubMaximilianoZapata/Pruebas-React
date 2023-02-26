import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProd] = useState();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((e) => setProd(e.find(item => id === item.id)))
      .catch((error) => console.log(error))
  }, [id]);
  return (
    <>
      {typeof producto === "undefined" ? <div class="d-flex justify-content-center"><div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div></div> : <ItemDetail prod={producto}/>}
    </>);
};
export default ItemDetailContainer;
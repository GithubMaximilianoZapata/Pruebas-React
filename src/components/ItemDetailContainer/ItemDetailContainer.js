import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [producto, setProd] = useState();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((e) => setProd(e.find(item => item.id === "1")))
      .catch((error) => console.log(error))
  }, []);
  return (
    <>
      {typeof producto === "undefined" ? <div class="d-flex justify-content-center"><div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div></div> : <ItemDetail prod={producto} />}
    </>);
};
export default ItemDetailContainer;
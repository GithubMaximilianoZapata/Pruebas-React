import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

const Alfajor = () => {
  const [producto, setProd] = useState();
  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((e) => setProd(e.filter(item => item.categoria === "Alfajor")))
      .catch((error) => console.log(error))
  }, []);
  return (
    <>
      {typeof producto === "undefined" ? <div class="d-flex justify-content-center"><div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div></div> : <ItemList prod= {producto}/>}
    </>);
};
export default Alfajor;
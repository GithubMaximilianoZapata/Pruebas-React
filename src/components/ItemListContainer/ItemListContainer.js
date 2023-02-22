import "./ItemListContainer.css";
import React, {useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList"

const products = [            
    {
        id: "1",
        img: "torta1-250x250.jpg",
        nombre: "Tortas para Eventos",
        descripcion: "Esta es una torta cubierta por diferentes cremas para eventos de alta concurrencia.",
        precio: 500,
        cantidad: "1",
        categoria: "Torta",
        stock: 15
    },
    {
        id: 2,
        img: "torta2-250x250.jpeg",
        nombre: "Tortas para Agasajo",
        descripcion: "Esta es una torta cubierta con glace de azucar para eventos de mediana concurrencia.",
        precio: 350,
        cantidad: 1,
        categoria: "Torta",
        stock: 10
      },
      {
        id: 3,
        img: "torta3-250x250.jpg",
        nombre: "Tortas para Postres",
        descripcion: "Esta es una torta con diferentes coberturas y tamaños para eventos de baja concurrencia.",
        precio: 250,
        cantidad: 1,
        categoria: "Torta",
        stock: 8
      },
      {
        id: 4,
        img: "alfajores1-250x250.jpg",
        nombre: "Alfajor Artesanal Chocolate Negro",
        descripcion: "Alfajores cubiertos por choclate negro rellenos con dulce de leche.",
        precio: 150,
        cantidad: 1,
        categoria: "Alfajor",
        stock: 50
      },
      {
        id: 5,
        img: "alfajores2-250x250.jpg",
        nombre: "Mini Alfajor de Chocolate Negro",
        descripcion: "Mini Alfajores cubirtos de chocolate negro rellenos con crema a eleccion.",
        precio: 130,
        cantidad: 1,
        categoria: "Alfajor",
        stock: 50
      },
      {
        id: 6,
        img: "alfajores4-250x250.jpeg",
        nombre: "Alfajor de Chocolate Premiun",
        descripcion: "Alfajores bañados en chocolate negro o blanco rellenos de dulce a eleccion.",
        precio: 190,
        cantidad: 1,
        categoria: "Alfajor",
        stock: 50
      },
      {
        id: 7,
        img: "alfajores3-250x250.jpg",
        nombre: "Mini Alfajor de Chocolate Premiun",
        descripcion: "Mini Alfajores cubirtos de chocolate negro rellenos con crema a eleccion.",
        precio: 140,
        cantidad: 1,
        categoria: "Alfajor",
        stock: 50
      },
      {
        id: 8,
        img: "bombones1-250x250.jpg",
        nombre: "Bombones de Chocolate",
        descripcion: "Bombones bañados en chocolate negro o blanco con rellenos especiales a eleccion.",
        precio: 80,
        cantidad: 1,
        categoria: "Bombon",
        stock: 50
      },
      {
        id: 9,
        img: "bombones2-250x250.jpg",
        nombre: "Bombones Premiun",
        descripcion: "Bombones bañados en chocolate negro rellenos de dulce de leche o cremas a eleccion.",
        precio: 90,
        cantidad: 1,
        categoria: "Bombon",
        stock: 50
      }
]

const ItemListContainer = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });  
      promise.then((res) => {
        setList(res);
      });
  }, []);
  return <ItemList prod={list}/>;
};
export default ItemListContainer;
import '../styles/Shop.css';
import ItemComponent from '../components/itemComponent';
import { useState } from 'react';
import uniqid from "uniqid";



let item=[{
  "id":1,
  "name":"Aurora",
  "price":"1,25",
  },
  {
    "id":2,
    "name":"Boreal",
    "price":"3,25",
  },
  {
    "id":3,
    "name":"Spacial",
    "price":"1,00",
  },
  {
    "id":4,
    "name":"Bolid",
    "price":"2,00",
  }
];

function Shop(props) {

  const addElementLocal=(value)=>{    
    let elementToSend={"id":value.id,"name":value.name,"price":value.price,"IdOp":uniqid(),}
    props.addElement(elementToSend);    
  }

  return (
    <div className="Shop">
      <div className='ItemsArray'>
          <ItemComponent value={item[0]} addItem={addElementLocal.bind(this,item[0])}/>
          <ItemComponent value={item[1]} addItem={addElementLocal.bind(this,item[1])}/>
          <ItemComponent value={item[2]} addItem={addElementLocal.bind(this,item[2])}/>
          <ItemComponent value={item[3]} addItem={addElementLocal.bind(this,item[3])}/>
      </div>
    </div>
  );
}

export default Shop;

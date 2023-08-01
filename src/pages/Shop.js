import '../styles/Shop.css';
import React  from 'react';

import ItemComponent from '../components/itemComponent';
import Header from '../components/header';
import uniqid from "uniqid";



let item=[{
  "id":1,
  "name":"Aurora",
  "price":"1.25",
  },
  {
    "id":2,
    "name":"Boreal",
    "price":"3.25",
  },
  {
    "id":3,
    "name":"Spacial",
    "price":"1.00",
  },
  {
    "id":4,
    "name":"Bolid",
    "price":"2.00",
  }
];

function Shop(props) {
  const addElementLocal=(value,quantity)=>{        
    let elementToSend={"id":value.id,"name":value.name,"price":value.price,"IdOp":uniqid(),"quantity":quantity}
    props.addElement(elementToSend);    
  }


  return (
    <div>
      <Header/>
      <div className="Shop">
        <div className='ItemsArray'>
            <ItemComponent value={item[0]} quantity="0" 
              addItem={(quantity)=>{addElementLocal(item[0],quantity)}}
              
              
              />
            <ItemComponent value={item[1]} quantity="0" 
              addItem={addElementLocal.bind(this,item[1])}
              
              />
            <ItemComponent value={item[2]} quantity="0" 
              addItem={addElementLocal.bind(this,item[2])}
              
              />
            <ItemComponent value={item[3]} quantity="0" 
              addItem={addElementLocal.bind(this,item[3])}
              
              />
        </div>
      </div>
    </div>
  );
}

export default Shop;

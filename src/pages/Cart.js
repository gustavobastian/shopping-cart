import '../styles/Cart.css';
import { useEffect,useState,useReducer } from 'react';
import Header from '../components/header';

function Cart(props) {
  
    const [state,setState]=useState(props.value);
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    /*let list=JSON.parse(localStorage.getItem('data'));
    console.log("initial list:"+JSON.stringify(list))*/

    console.log(JSON.stringify(props.value))
    useEffect(()=>{
        console.log("altered")        
        console.log(JSON.stringify(props.value.list))             
        forceupdate();
      },[props.value.list]);

  return (
    <div>
      <Header/>
      <div className="CartForm">        
        <h1>Cart:</h1>
       
        
        <ul className="ulTicket">
        {state.list.map((element)=>{    
          if(element.id!=0){    
          return  <li className="liTicket" key={element.IdOp}>
                    <div className="itemName">
                    {element.name}
                    </div> 
                    <div className="itemName">
                    {element.quantity}
                    </div>                   
                    <div className='price'>
                    {element.price} USD
                    </div>
                  
                  </li>}
          else{
            return (<li className="liTicketHeader" key={element.IdOp}>
            <div className="itemName">
            Name
            </div>                    
            <div className="itemName">
            Quantity
            </div>                    
            <div className='price'>
            Price
            </div>          
          </li>)
          }
          })}
      
        </ul>  
      </div>
    </div>
  );
}

export default Cart;
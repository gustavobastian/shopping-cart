import '../styles/Cart.css';
import { useEffect,useState,useReducer } from 'react';
import Header from '../components/header';
import {FaTrashAlt} from "@react-icons/all-files/fa/FaTrashAlt";

function Cart(props) {


  
  
  const [total,setTotal]=useState(0);
  
  const [ignored,forceupdate]=useReducer(x=>x+1,0);

  const totalCalc=()=>{
    let totalLocal=0;
    props.value.list.forEach(element => {
      if(element.id!==0){              
        totalLocal=totalLocal+(parseFloat(element.price)*parseInt(element.quantity))        
      }
    });
    setTotal(totalLocal);    
  }

  useEffect(()=>{
        totalCalc();
        forceupdate();        
      },[props.value.list]);

  const deleteItem=(e)=>{        
        console.log(ignored);   
        props.removeElement(e);         
        return 1;
  }  

  const finish=()=>{
    console.log("removing ticket:")   
    window.alert("thanks for the purchasing!")
    props.finish();
    return 1;
  }    
  return (
    <div>
      <Header/>
      <div className="CartForm">        
        <h1 className='cartTitle'>Cart:</h1>               
        <ul className="ulTicket">
        {props.value.list.map((element)=>{    
          if(element.id!==0){    
          return  <li className="liTicket" key={element.IdOp}>
                    <div className="itemName">
                    {element.name}
                    </div> 
                    <div className="itemName">
                    {element.quantity}
                    </div>                   
                    <div className='price'>
                    {parseFloat((element.price))*(element.quantity)} USD
                    </div>
                    <button id="Item_" className="trash" onClick={deleteItem.bind(this,(element.IdOp))} ><FaTrashAlt/></button>
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
            <div className='price'>
            
            </div>          
          </li>)
          }
          })}
      
        </ul>  

      <div className='totalLine'>
           <div>Total</div> 
           <div>{total} USD</div> 
      </div> 

      <div className='payButton'>
        <button className="finishButton" onClick={finish}>Finish</button>
        </div> 

      </div>
    </div>
  );
}

export default Cart;
import '../styles/quantity.css';

function quantityItem(props) {
    let valueLocal=props.value;    

  return (
    <div className="quantity">        
      <div>Quantity</div>
      <div className="boxQuantity">
        <input className="quantityInput" type="text" placeholder='0'/>
        <div className="quantityButtons">
            <button className="QButtons">+</button>      
            <button className="QButtons">-</button>      
        </div>
      </div>
        
    </div>
  );
}

export default quantityItem;
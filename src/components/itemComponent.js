import '../styles/ItemComponent.css';

function ItemComponent(props) {
    let valueLocal=props.value;    

    const addItemLocal=()=>{        
        props.addItem()
    }
  return (
    <div className="item">
        <h1>{valueLocal.name}</h1>
        <img className="imageComponent" src={require("../images/plane_"+valueLocal.id+".jpg")} alt="not found"/>    
        <div className="linePrice">
        <div className='priceLabel'>Price:{valueLocal.price} USD</div> <div className='addButton' onClick={addItemLocal}>Add</div>
        </div>       
    </div>
  );
}

export default ItemComponent;
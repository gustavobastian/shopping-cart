import '../styles/Shop.css';
import ItemComponent from '../components/itemComponent';

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

function Shop() {
  return (
    <div className="Shop">
      <div className='ItemsArray'>
          <ItemComponent value={item[0]}/>
          <ItemComponent value={item[1]}/>
          <ItemComponent value={item[2]}/>
          <ItemComponent value={item[3]}/>
      </div>
    </div>
  );
}

export default Shop;

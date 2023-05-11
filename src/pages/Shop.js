import '../styles/Shop.css';
import ItemComponent from '../components/itemComponent';

let item=[{
  "id":1,
  "name":"Aurora",
  },
  {
    "id":2,
    "name":"Boreal",
  },
  {
    "id":3,
    "name":"Spacial",
  },
  {
    "id":4,
    "name":"Bolid",
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

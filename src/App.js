import './App.css';
import { useState, useEffect } from 'react';
import SingleCoffee from './components/SingleCoffee';

function App() {
  const [coffeeList, setCoffeeList] = useState();
  
  const getCoffees = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(res => res.json())
    .then(setCoffeeList)
    .catch(console.error)
  }

  useEffect(getCoffees, []);

  return (
    <div className="App">
      <main>
        <h1>Coffees by Sample API</h1>
        {/* <button onClick={getCoffees}>Get Coffees</button> */}
        <div  className="menu-items">
        {
          coffeeList && coffeeList.map(coffee => (
            <SingleCoffee coffee={coffee}/>
          ))
        }
        </div>
      </main>
    </div>
  );
}

export default App;

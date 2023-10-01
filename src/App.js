import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [res, setRes] = useState();

  return (
    <div className="App">
        <button onClick={() => TestAPI(res, setRes)}>Click here for margarita logs</button>
    </div>
  );
}

async function TestAPI(res, setRes) {

  await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json()).then(data => setRes(data.drinks));

  console.log(res);
  console.log(res[0].strDrink);
  console.log(res[0].strInstructions);
  console.log(res[0].strDrinkThumb);
  console.log(res[0].strIngredient1);
  console.log(res[0].strIngredient2);
  console.log(res[0].strIngredient3);
  console.log(res[0].strIngredient4);

  return(
    <>
      <p>{res[0].strDrink}</p>
    </>
  );
}




export default App;

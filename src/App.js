import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [res, setRes] = useState();
  useEffect(() => {
    let shouldFetch = true;
    if (shouldFetch) {
      shouldFetch = false;
      let res = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(response => response.json())
        .then(data => setRes(data.drinks));
    }
    return () => { shouldFetch = false; }
  }, []);

  return (
    <div className="App">
      {res ? <img src={res[0].strDrinkThumb + "/preview"} alt="margarita" /> : <div>loading...</div>}
      {res ? <div>{JSON.stringify(res[0].strInstructions)}</div> : <div>loading... 2</div>}
    </div>
  );
}






export default App;

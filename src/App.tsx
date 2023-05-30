import React from 'react';
import meatImage from './assets/bacon.png';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/bacon.png';
import saladImage from './assets/bacon.png';
import './App.css';
import {Ingredients} from "./type";


const App = () => {

    const INGREDIENTS: Ingredients[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Bacon', price: 60, image: baconImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Salad', price: 10, image: saladImage},
    ];


  return(
      <div className="App">

      </div>
  )
};

export default App;

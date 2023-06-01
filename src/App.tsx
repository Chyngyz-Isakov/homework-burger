import React, {useState} from 'react';
import meatImage from './assets/meat.png';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import {Ingredient} from "./type";
import './App.css';
import {nanoid} from "nanoid";


const App = () => {

    const INGREDIENTS: Ingredient[] = [
        {id: nanoid(), name: 'Meat', price: 80, image: meatImage},
        {id: nanoid(), name: 'Bacon', price: 60, image: baconImage},
        {id: nanoid(), name: 'Cheese', price: 50, image: cheeseImage},
        {id: nanoid(), name: 'Salad', price: 10, image: saladImage},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
    ]);

    return (
        <div className="App">
            <div className='ingredients-wrap'>
                <h4>Ingredients</h4>
                {INGREDIENTS.map((ingredient) => (
                        <div className='ingredients-choose' key={ingredient.id}>
                            <img
                                style={{
                                    width: '50px',
                                    border: '1px solid black',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '.2em .2em 0.3em #333',
                                }}
                                src={ingredient.image} alt={ingredient.name}
                            />
                            <p style={{fontSize:'18px', fontWeight:'bold'}}>{ingredient.name}</p>
                            <button>+</button>
                            <span>x0</span>
                            <button>-</button>
                            <button>del</button>
                        </div>

                    )
                )
                }
            </div>
            <div className='burger-wrap'>

                <div className="Burger">
                    <h4>Burger</h4>
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    <div className="Bacon"></div>
                    <div className="Cheese"></div>
                    <div className="Meat"></div>
                    <div className="Salad"></div>
                    <div className="BreadBottom"></div>
                    <p>Total Price:</p>
                </div>
            </div>
        </div>
    )
};

export default App;

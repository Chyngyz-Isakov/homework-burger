import React, {useState} from 'react';
import {nanoid} from "nanoid";
import meatImage from './assets/meat.png';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import {BurgerType, Ingredient} from "./type";
import ResetButton from "./components/ResetButton/ResetButton";
import Burger from "./components/Burger/Burger";
import IngredientPart from "./components/IngredientPart/IngredientPart";
import './App.css';


const App = () => {

    const INGREDIENTS: Ingredient[] = [
        {id: nanoid(), name: 'Meat', price: 80, image: meatImage},
        {id: nanoid(), name: 'Bacon', price: 60, image: baconImage},
        {id: nanoid(), name: 'Cheese', price: 50, image: cheeseImage},
        {id: nanoid(), name: 'Salad', price: 10, image: saladImage},
    ];

    const [ingredients, setIngredients] = useState<BurgerType[]>([
        {name: 'Meat', count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
    ]);

    const [totalPrice, setTotalPrice] = useState(30);


    const addOne = (name: string) => {
        setIngredients(prevState => {
            return prevState.map((item, index) => {
                    if (name === item.name) {
                        setTotalPrice(prevState => prevState + INGREDIENTS[index].price);
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }
                    return item;
                }
            )
        });

    };

    const removeOne = (name: string) => {
        setIngredients((prevState) => {
            return prevState.map((item, index) => {
                    if (name === item.name && item.count > 0) {
                        setTotalPrice(prevState => prevState - INGREDIENTS[index].price);
                        return {
                            ...item,
                            count: item.count - 1
                        }
                    }
                    return item;
                }
            )
        })
    };

    const removeAll = (name: string) => {
        setIngredients((prevState) => {
            return prevState.map((item, index) => {
                    if (name === item.name) {
                        setTotalPrice(prevState => prevState - (INGREDIENTS[index].price * item.count));
                        return {
                            ...item,
                            count: 0
                        }
                    }
                    return item;
                }
            )
        })
    };

    const resetAll = () => {
        setIngredients((prevState) => {
            return prevState.map((item, index) => {
                    if (item.name) {
                        setTotalPrice(prevState => prevState - (INGREDIENTS[index].price * item.count));
                        return {
                            ...item,
                            count: 0
                        }
                    }
                    return item;
                }
            )
        })
    };

    const showIngredients = INGREDIENTS.map((ingredient, index) => {
        return (
            <IngredientPart name={ingredient.name}
                            image={ingredient.image}
                            count={ingredients[index].count}
                            price={ingredient.price}
                            key={ingredient.id}
                            addOne={addOne}
                            removeOne={removeOne}
                            removeAll={removeAll}
            />
        )
    });


    return (
        <div className="App">
            <div className='ingredients-wrap'>
                <h4 className='ingredients-title'>Ingredients</h4>
                {showIngredients}
                <ResetButton resetAll={resetAll}/>
            </div>

            <div className='burger-wrap'>
                <h4 className='burger-title'>Burger</h4>
                <Burger ingredients={ingredients} totalPrice={totalPrice}/>
            </div>
        </div>
    )
};

export default App;

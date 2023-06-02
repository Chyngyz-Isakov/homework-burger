import React, {useState} from 'react';
import {nanoid} from "nanoid";
import meatImage from './assets/meat.png';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import {Burger, Ingredient} from "./type";
import './App.css';


const App = () => {

    const INGREDIENTS: Ingredient[] = [
        {id: nanoid(), name: 'Meat', price: 80, image: meatImage},
        {id: nanoid(), name: 'Bacon', price: 60, image: baconImage},
        {id: nanoid(), name: 'Cheese', price: 50, image: cheeseImage},
        {id: nanoid(), name: 'Salad', price: 10, image: saladImage},
    ];

    const [ingredients, setIngredients] = useState<Burger[]>([
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



    return (
        <div className="App">
            <div className='ingredients-wrap'>
                <h4>Ingredients</h4>
                {INGREDIENTS.map((ingredient, index) => (
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
                            <p style={{
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>{ingredient.name}({INGREDIENTS[index].price}сом)</p>
                            <button onClick={() => addOne(ingredient.name)}>+</button>
                            <span>x{ingredients[index].count}</span>
                            <button onClick={() => removeOne(ingredient.name)}>-</button>
                            <button onClick={() => removeAll(ingredient.name)}>del</button>
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
                    {ingredients.map(item => {
                        const div: React.ReactNode[] = [];
                        for (let i = 0; i < item.count; i++){
                            div.push(<div className={item.name}></div>)
                        }
                        return div;
                        // if (ingredients[index].count){
                        //     return <div className={item.name}></div>
                        // }else return ''
                    })}
                    {/*{ingredients.map((item,index) => {*/}
                    {/*    if (ingredients[index].count){*/}

                    {/*        return <div className={item.name}></div>*/}
                    {/*    }else return ''*/}
                    {/*})}*/}
                    <div className="BreadBottom"></div>
                    <p>Total Price:</p>
                    <p>{totalPrice} сом</p>
                </div>
            </div>
        </div>
    )
};

export default App;

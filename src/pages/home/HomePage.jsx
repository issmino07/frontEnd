import React, { act, useEffect } from 'react'
import { getAll } from '../../services/foodService';
import Cards from '../../components/cards/Cards';


const initialState = {foods: []};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FOODS_LOADED':
            return {...state, foods: action.payload};
        default:
            return state;
    }
    }
export default function HomePage() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const {foods} = state;



    useEffect(() => {
        getAll().then((foods) => dispatch({type: 'FOODS_LOADED', payload: foods}));
    }, []);
  return (
    <>
        <div className='container'>
            <input type="text" placeholder="buscador..." />
        </div>
        <div>
        {/* Etiquetas */}
        <div
          tags={[{ name: 'Plato Fuerte' }, { name: 'Postres' }, { name: 'Bebidas' }]}
          forFoodPage
        ></div>
      </div>
        <Cards foods={foods}/>
    </>
  )
}

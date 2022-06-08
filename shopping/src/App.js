import React from 'react';
import {Provider} from 'react-redux';
import store from './actions/index.js'
import Home from './Home.js';
import './App.css'
import DisplayCart from './DisplayCart.js';
const App = () => {
    return (
        <div>
            <h1 id="shoppingCart">Shopping Cart</h1>
            <div className='component'>
                <Home/>
                <DisplayCart/>
            </div>
        </div>
    )
}

export default App;
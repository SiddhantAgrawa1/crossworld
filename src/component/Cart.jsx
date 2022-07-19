import React from 'react';
import './css/Cart.css';
import { useDispatch} from 'react-redux';
import { increment,decrement } from './counterSlice'

const Cart = ({Elemdata}) => {
    const dispatch = useDispatch()
       
    return (
                Elemdata['quantity'] > 0 ? 
                <div className='item'>
                    <div><img id='img' src={require(`${Elemdata['imgsrc']}`)} alt="books"></img></div>
                    <div>
                        <div id='name'>{Elemdata['name']}</div>
                        <div id='price'>
                            <span id='oprice'>₹{Elemdata['oprice']} </span>
                            <span id='dprice'>₹{Elemdata['dprice']}</span>
                            <span id='discount'>{Elemdata['discount']} off</span>
                        </div>
                        <div id='quant'>
                            <button onClick={() =>  dispatch(decrement(Elemdata))}><img src={require('./img/minus.png')} width='12px' alt='Minus'/></button>
                            <div>{Elemdata['quantity']}</div>
                            <button onClick={() =>  dispatch(increment(Elemdata))}><img src={require('./img/plus.png')} width='13px' alt='Plus'/></button>
                        </div>
                    </div>
                </div> : null
            )
}

export default Cart;
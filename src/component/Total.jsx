import React from 'react';
import './css/Total.css';
import { useSelector } from 'react-redux';

const Total = () => {
    const books = useSelector((state) => state.counter.books);
    let Total = 0 , MRP = 0;
    books['marathi'].map((data) => {
        Total += data['dprice'] * data['quantity'];
        MRP += data['oprice'] * data['quantity'];
    });
    books['english'].map((data) => {
        Total += data['dprice'] * data['quantity'];
        MRP += data['oprice'] * data['quantity'];
    });
    const buyNow = () => {
        alert("Congratulation! Your order successfully placed")
    }
    return (
        <div>
           <div id='tot'>
                    <span id='TotText'>Total : </span>
                    <span id='mrp'>₹{MRP}</span>
                    <span id='total'>₹{Total}</span>
                    <span id='save'>You save ₹{MRP- Total}</span>
                </div>
                <button id='buy' onClick={buyNow}>Buy Now</button> 
        </div>
    )
}

export default Total;
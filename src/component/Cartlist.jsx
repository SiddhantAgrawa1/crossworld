import React from "react";
import Cart from "./Cart";
import './css/Cart.css';
import { useSelector} from 'react-redux';

const Cartlist = () => {
    const books = useSelector((state) => state.counter.books);
    return(
        <div>
            {  books['marathi'].map((Elemdata,index) => 
                    <Cart Elemdata={Elemdata} key={index} />)
            }
            {  books['english'].map((Elemdata,index) => 
                    <Cart Elemdata={Elemdata} key={index} /> )
            }
            
        </div>
    )
}

export default Cartlist;
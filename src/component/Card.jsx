import React from 'react';
import './css/Card.css';
import './css/Cardlist.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'

const Card = ({language}) => {
    const books = useSelector((state) => state.counter.books)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            {
                books[language].map((data,index) => 
                    language === data['language'] ? 
                    <div key={index} className='card'>
                        <div>
                            <img src={require(`${data['imgsrc']}`)} alt="books"></img>
                        </div>
                        <div id='name'>{data['name']}</div>
                        <div id='price'>
                            <span id='oprice'>₹{data['oprice']} </span>
                            <span id='dprice'>₹{data['dprice']}</span>
                            <span id='discount'>Flat {data['discount']} off</span>
                        </div>
                        <div>
                           { data['quantity'] === 0 ? <button onClick={() => (dispatch(increment(data)))}>Add to cart</button> : <button>Added</button> }
                        </div>
                    </div> : null
                )
        }
        </div>
    )
}

export default Card;
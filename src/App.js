import React,{useState} from 'react';
import Card from './component/Card';
import Cartlist from './component/Cartlist';
import './App.css';
import { useSelector } from 'react-redux';
import Total from './component/Total';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  const [toggle,setToggle] = useState(false);
  const books = useSelector((state) => state.counter.books);
  let BookCount = 0;

  // To toggle cart button
  const handle = () => {
     toggle ? setToggle(false) : setToggle(true)
  }
  
  for(let i=0; i<(books['marathi'].length + books['english'].length); i++){
     if (books['marathi'][i] && books['marathi'][i].quantity > 0) {
       BookCount += 1;
      }
      if(books['english'][i] && books['english'][i].quantity > 0){
        BookCount += 1;
      }
  }

  return (
    <div>
      <div id='container'> 
        <div>CrossWorld</div>
        <div><button onClick={handle} id='cartbtn' ><img src={require('./component/img/cartimg.png')} alt="Shoes"/><sup>{BookCount}</sup> </button></div>
      </div>
      <Navbar/>
      {toggle ? ((BookCount > 0) ? <div id='cart'><Cartlist /> <Total/></div> : (<div id='cartEmp'>Cart is empty</div>)) : null}
      <Routes>
        <Route path='/crossworld/' element={<Card language="marathi"/>}></Route>
        <Route path='/crossworld/marathi' element={<Card language="marathi"/>}></Route>
        <Route path='/crossworld/english' element={<Card language="english"/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
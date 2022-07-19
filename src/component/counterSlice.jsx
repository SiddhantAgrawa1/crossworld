import { createSlice } from '@reduxjs/toolkit';
import {MarathiBook, EnglishBook} from './data';

const initialState = {
  books: {marathi : [...MarathiBook], english : [...EnglishBook]},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      let language = action.payload['language']
      for(let i=0; i<state.books[language].length; i++){
        if (state.books[language][i]['id'] === action.payload['id']){
          state.books[language][i]['quantity'] += 1;
          break;
        }
      }
    },
    decrement: (state,action) => {
      let language = action.payload['language']
        for(let i=0; i<state.books[language].length; i++){
          if (state.books[language][i]['id']-1 === action.payload['id']-1){
            state.books[language][i]['quantity'] -= 1
            break;
          }
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment,decrement } = counterSlice.actions

export default counterSlice.reducer
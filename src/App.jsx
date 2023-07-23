import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

import {increment,decrement} from './slice';



const App = () => {
  const dispatch=useDispatch()

  const count1=useSelector((state)=>{
    return(state.count.value)
    
  })

  function add(){
    dispatch(increment(5))
  }
  function sub(){
    dispatch(decrement(5))
  }
  return (
    <div>
      <button onClick={add}> Add</button>
      <button onClick={sub}> sub</button>
      {count1}
    </div>
  )
}

export default App
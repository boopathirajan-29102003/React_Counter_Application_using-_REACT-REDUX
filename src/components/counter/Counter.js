import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset,IncrementbyValue } from "./counterSlice";
import './counter.scss';

const Counter = () => {

    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    const [addValue,setAddValue]=useState(0);
    const value=Number(addValue)||0;;

    const resetAll=()=>{
        setAddValue(0);
        dispatch(reset());
    }

  return (
    <section>
        <div className='main'>
        <p>{count}</p>
        <div className='operation'>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
        <input type="text" value={addValue} onChange={(e)=>{setAddValue(e.target.value)}}/>
        <div className='increment'>
            <button onClick={()=>dispatch(IncrementbyValue(value))}>ADD</button>
            <button onClick={resetAll} >Reset</button>
        </div>
        </div>
    </section>
  )
}

export default Counter
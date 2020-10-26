import React from 'react'
import './App.css';
import Counter from './components/Counter';
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "./JS/actions/actionCounter"

function App() {

  const show=useSelector((state)=>state.reducerCounter.show)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(toggle())}>Show</button>
      {show?<Counter />:null}
    </div>
  );
}

export default App;

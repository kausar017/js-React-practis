import { useState } from 'react'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Usars from './usars';
import Frends from './Frends';




function App() {


  function handalclick() {
    alert('hello')
  }

  const handalclick2 = () => {
    alert('handal click 2')
  }

  const addTofive = (num) => {
    alert(num + 5);
  }


  return (
    <>

      <h3>React Core concepts 2</h3>
      <Frends></Frends>
      <Usars></Usars>
      <Team></Team>
      <Counter></Counter>

      <div className='btn'>
        <button onClick={handalclick}>Cleck Me </button>
        <button onClick={handalclick2}>Cleck Me </button>
        <button onClick={() => { alert('thard click') }}>thard</button>
        <button onClick={() => addTofive(3)}>Four</button>
      </div>
    </>
  )
}

export default App 

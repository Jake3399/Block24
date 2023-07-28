import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  console.log("count", count);
  return (
    <>
  <h1>Hello</h1>
  <button onClick= {() => setCount(count => count + 1)}>The count is {count} </button>


    </>
  );
}

export default App

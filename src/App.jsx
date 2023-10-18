import { useState } from 'react'
import './App.css'
import Triple from './companents/Triple'
import { useEffect } from 'react'

function App() {
  const [data,setData]=useState([])
  
useEffect(()=>{
  fetch("http://localhost:3000/baiel")
  .then(res=>res.json()) 
  .then(result=>setData(result))

},[])
console.log(data);

  return (
    <>
    <div>
<Triple/>     
    </div>
      
    </>
  )
}

export default App

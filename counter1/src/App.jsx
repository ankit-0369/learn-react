import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)
  let [cnt, setCnt]= useState(0)

  // let cnt= 5;
  const addValue= ()=>{
    // console.log("clicked", cnt, " ", Math.random());
    if(cnt<20){
      setCnt(cnt+1)
    }else{
      console.log("cliked value greater  than 20");
    }
  }

  const decValue= ()=>{
    if(cnt>0){
      setCnt(cnt-1)
    }else{
      console.log("cliked value less  than 0");
    }
    
  }
  return (
    <>
     <h1>Ankit & React</h1>
     <h2>learnig usestates</h2>  
     <h3>cur value: {cnt}</h3> 
     {/* <button onClick={addValue}>add value {cnt} </button> */}
     <p>
     <button onClick={addValue}><i className="fa-regular fa-heart" style={{color: "#c32ced", fontSize: "50px"}}></i> </button>
      <br />
      likes: {cnt}
     </p>
     
     <button onClick={decValue}>remove value : {cnt}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'




function App() {
  
  const [color, setColor]= useState("olive");

  const handleRandom= ()=>{
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColorRep= "#";
    for (let index = 0; index < 6; index++){
      const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
        hexColorRep += hexCharacters[randomPosition]
    }

    console.log(hexColorRep);
    setColor(hexColorRep);
    
}
  return (
    <>
     <div className="flex justify-center h-screen w-full duration-200"
      style={{backgroundColor: color}}
      >
          <div className="fixed flex flex-wrap bottom-12
           inset-x-0 px-2 justify-center">
              <div className="flex flex-wrap justify-center gap-3 
              shadow-lg bg-slate-300 px-1 py-2 rounded-[10px]">
                <button onClick={()=> setColor("violet")} className=" text-white outline-none
                 bg-violet-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  Violet
                </button>

                <button onClick={()=> setColor("indigo")} className=" text-white outline-none
                 bg-indigo-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  indigo
                </button>

                <button onClick={()=> setColor("blue")} className=" text-white outline-none
                 bg-blue-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  blue
                </button>

                <button onClick={()=> setColor("green")} className=" text-white outline-none
                 bg-green-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  green
                </button>

                <button onClick={()=> setColor("yellow")} className=" text-white outline-none
                 bg-yellow-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  Yellow
                </button>

                <button onClick={()=> setColor("orange")} className=" text-white outline-none
                 bg-orange-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  Orange
                </button>

                <button onClick={()=> setColor("red")} className=" text-white outline-none
                 bg-red-800 flex 
                  py-2 px-4 rounded-xl cursor-pointer">
                  Red
                </button>

                <button onClick={handleRandom} className=" text-white outline-none
                  flex 
                  py-2 px-4 rounded-xl cursor-pointer" 
                  style={{backgroundColor: "burlywood"}}
                  >
                  Random
                </button>

                
                </div>
            </div>
      </div>
    
    </>
  )
}

export default App

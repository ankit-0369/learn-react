import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const users = [
    {
      username: "krishna",
      type: "undefined",
      img: "https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      username: "Ankit",
      type: "Human",
      img: "https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      username: "Doraemon",
      type: "Anime",
      img: "https://images.pexels.com/photos/6567953/pexels-photo-6567953.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
  // let user= {
  //   username: "krishna",
  //    type: "undefined"
  // }

  return (
    <>
      <div className="nav-bar flex px-56 mx-0 rounded h-12
       bg-white justify-evenly items-center text-gray-950 list-none ">
        <li>Home</li>
        <li>About</li>
        <li>blog</li>
      </div>
      <div className="class  font-bold text-4xl text-red-300 text-center mt-6">Ankit & react With TailwindCss</div>

      <div className="cards-container flex mt-4 gap-4 ml-3 flex-wrap justify-center">

        <Card id="1" obj1={users[0]} />
        <Card id="2" obj1={users[1]} />
        <Card id="3" obj1={users[2]} />

      </div>

    </>
  )
}

export default App

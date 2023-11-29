import { useCallback, useState, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numbersAllowed, setnumbersAllowed] = useState(false)
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)


  //password Generator Logic----

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) str += "0123456789"

    if (specialCharsAllowed) str += "!@#$%^&*()={}:<>?|"

    for (let i = 0; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)

    }

    setPassword(pass)


  }, [length, numbersAllowed, specialCharsAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, specialCharsAllowed, passwordGenerator])

  const copyToclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-2xl py-3 mx-auto shadow-md rounded-lg px-4 my-8
      text-orange-500 bg-gray-700 text-xl'>
        <h1 className=" text-blue-400 text-center text-2xl font-sans">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder='Generate PassWord'
            className='outline-none rounded-md py-1 px-3 w-full mx-1 my-3 text-lg'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-800 text-white px-3 py-0.2 shrink-0 '
            onClick={copyToclipboard}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1 flex-wrap">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='pl-1 text-lg'>Length: {length}</label>

            <input
              className=' px-3 py-2 ml-3 text-3xl'
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {
                setnumbersAllowed((prev) => !prev);
              }}
            />
            <label className='pl-1 text-lg '>Numbers</label>

            <input
              className=' px-3 py-2 ml-3 text-3xl'
              type="checkbox"
              defaultChecked={specialCharsAllowed}
              id="specialCharsInput"
              onChange={() => {
                setSpecialCharsAllowed((prev) => !prev);
              }}
            />
            <label className='pl-1 text-lg '>Chars</label>

            <button
              onClick={passwordGenerator}
              className='outline-none bg-blue-800 text-white px-3 py-0.5
               mx-2 rounded-sm shrink-0 text-xl hover:bg-orange-500 '>Change</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

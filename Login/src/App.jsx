import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div class = " bg-gray-800 text-white flex justify-center items-center min-h-screen">
    <div class = "bg-gray-700 border-black rounded-lg p-8 max-w-sm w-full shadow-2xl">
      <h1 class ="text-white text-3xl text-center font-bold">Login</h1>

      <form>
        <div class = "mb-4">
          <label  For = "email" class = "block text-sm text-gray-300 mb-2"> Email</label>
          <input  class = "rounded-lg bg-gray-600 px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500   " type="email" name="" id="" placeholder='Email' />
        </div>

        <div>
          <label For="password" class = "block text-sm text-gray-300 mb-2"  >Password</label>
          <input class = "rounded-lg bg-gray-600 px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"    type="password" name="" id="" placeholder='Password' />
        </div>

        <button type='submit' class = " w-full bg-blue-500 text-white rounded-lg px-3 py-2 mt-6 hover:bg-blue-600 shadow-2xl">Login</button>
      </form>
    </div>

    </div>
    </>
  )
}

export default App

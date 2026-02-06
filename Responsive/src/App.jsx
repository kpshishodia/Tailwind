import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div class = "bg-gray-800 text-white flex min-h-screen justify-center items-center">

      <h1 class = "sm:text-4xl text-xl"> Learn Responsive Design.</h1>
    </div> */}

    
{/* 


 1. for  equal portions  --> */}

 {/* <div class="m-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
  <div class="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
</div>  */}


{/* <div class="m-4 grid  gap-4 sm:grid-cols-4">
  <div class="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-red-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-purple-500 shadow"></div>
</div>  */}

 {/* 2 . Non equal portions  */}

<div className="m-4 grid gap-4 sm:grid-cols-12">
  <div className="sm:col-span-2 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div className="sm:col-span-8 min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
  {/* <div className="sm:col-span-2 min-h-[100px] rounded-lg bg-red-500 shadow"></div> */}
  <div className="hidden sm:block sm:col-span-2 min-h-[100px] rounded-lg bg-red-500 shadow"></div>
</div>

    </>
  )
}

export default App

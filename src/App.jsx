import { useState } from 'react'

import './App.css'

function App() {
 const [color, setColor] = useState("olive")

  return (
    <div className='full' style={{backgroundColor:color}}>
      <h1 className='text-white'>HAVE FUN!!</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='back flex flex-wrap justify-center gap-3 shadow-xl p-3 rounded'>
          <button onClick={()=>setColor("red")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("olive")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=>setColor("black")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("purple")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("gray")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={()=>setColor("crimson")} className='rounded outline-none px-4 py-1 text-white' style={{backgroundColor:"crimson"}}>Crimson</button>
        </div>
      </div>
    </div>
  )
}

export default App

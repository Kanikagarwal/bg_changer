import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from './Colors'

function App() {
  const [color, setColor] = useState("olive");
  return (
    
    <div className="w-screen h-screen duration-200 justify-center items-center" style={{backgroundColor:color}}>
      <img className='img border-black border-4 justify-self-center' src="https://i.pinimg.com/originals/4d/a3/bb/4da3bb12ff8b214818481019ace3fb97.gif" alt="" />
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <Color name="Red" setColor={setColor}/>
      <Color name="Pink"  setColor={setColor}/>
      <Color name="Blue"  setColor={setColor}/>
      <Color name="Green"  setColor={setColor}/>
      <Color name="Purple"  setColor={setColor}/> 
      <Color name="Yellow"  setColor={setColor}/> 
      <Color name="Grey"  setColor={setColor}/> 
      <Color name="Turquoise"  setColor={setColor}/> 
      </div>
    </div>
    
       
  )
}

export default App

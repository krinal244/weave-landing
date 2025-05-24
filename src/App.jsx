import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SparklesCore } from './components/ui/SparklesCore'
import { SparklesPreview } from './test'
import './assets/style/global.css'; 
import { ThreeDCardDemo } from './test2'
import { MeteorsDemo } from './test3'
import { HeroScrollDemo } from './test4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
       
    
     <SparklesPreview/>
     <ThreeDCardDemo/>
     <MeteorsDemo/>
     <HeroScrollDemo/>
    </div>
  )
}

export default App

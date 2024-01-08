import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './nav/navigation'
import Image from './image/image'
import Para from './para/para'
import Image2 from './image_split/image2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Image/>
      <Para/>
      <Image2/>
    </>
  )
}

export default App

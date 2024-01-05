import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav/nav'
import Im from './image/im'
import Para from './para/para'
import ImgSplt from './image_split/ImgSplt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Im/>
      <Para/>
      <ImgSplt/>
    </>
  )
}

export default App

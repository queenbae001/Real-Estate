import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar'
import Foot from './component/Foot'
import Home from './Screen/Home'
import About from './Screen/About'
import Contact from "./Screen/Contact";




function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Foot/>
      
    </>
  )
}

export default App

import { useState } from 'react'
//import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [dark, setdark] = useState(false)

  return (
    <>
      <Navbar dark={dark} setdark={setdark}/>
      <Header dark={dark}/>
      <About dark={dark}/>
      <Projects dark={dark}/>
      <Contact dark={dark}/>
      <Footer dark={dark}/>
    </>
  )
}

export default App

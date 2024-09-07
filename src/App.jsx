import './App.css'
import { Routes, Route } from 'react-router-dom'
//Components
import Navbar from './components/Navbar'
//Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App

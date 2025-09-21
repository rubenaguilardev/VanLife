import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Vans from "./components/Vans"


const App = () => {
  return (
    <Router>
      <div className="w-full h-screen flex flex-col">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/vans' element={<Vans/>}/>
        </Routes>
      </div>
     
    </Router>
  )
}

export default App
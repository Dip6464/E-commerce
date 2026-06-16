import {About} from "./components/About"
import { Contact } from "./components/Contact"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Service } from "./components/Service";
import { Blog } from "./components/Blog"
import { Addition } from "./components/Button";
import { Addp } from "./components/AddP";

import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/addition" element={<Addition />} />
        <Route path="/Addproduct" element={<Addp/>}/>
        

      </Routes>
    </>
  )
}

export default App




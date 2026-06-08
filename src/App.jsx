import {About} from "./components/About"
import { Contact } from "./components/Contact"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Service } from "./components/Service";
import { Blog } from "./components/Blog"
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

      </Routes>
    </>
  )
}

export default App




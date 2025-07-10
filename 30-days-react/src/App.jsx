import { Route, Routes } from "react-router-dom"
import Mainlayout from "./layouts/mainlayout"
import About from "./pages/about"
import Home from "./pages/home"

function App() {
  

  return (
    <Routes>
       <Route path="/" element={<Mainlayout />}>
        <Route index element={<About />} />
        <Route path="about" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App

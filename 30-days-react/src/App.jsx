import { Route, Routes } from "react-router-dom"
import Index from "./landing/Index"
// import About from "./pages/about"
// import Home from "./pages/home"

function App() {
  

  return (
    <Routes>
       <Route path="*" element={<Index />}>
        {/* <Route index element={<About />} />
        <Route path="about" element={<Home />} /> */}
      </Route>
    </Routes>
  )
}

export default App

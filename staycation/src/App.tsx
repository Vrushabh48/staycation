import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Alllocations from "./pages/Alllocations"
import Product from "./pages/Product"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/locations' element={<Alllocations />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

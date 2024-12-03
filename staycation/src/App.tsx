import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Alllocations from "./pages/Alllocations"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/locations' element={<Alllocations />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

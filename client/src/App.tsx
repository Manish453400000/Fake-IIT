import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Auth from "./page/Auth"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

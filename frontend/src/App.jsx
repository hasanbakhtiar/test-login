import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EnterPage from "./pages/dashboard/EnterPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<EnterPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
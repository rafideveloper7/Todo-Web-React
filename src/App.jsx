import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RegisterUserProvider } from "./Context/UserContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

function App() {
  return (
    <RegisterUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RegisterUserProvider>
  );
}

export default App;

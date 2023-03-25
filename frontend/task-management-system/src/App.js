import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Homepage from "./Pages/Homepage";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />


    </Routes>

  </div>;
}

export default App;

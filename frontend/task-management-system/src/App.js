import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Homepage from "./Pages/Homepage";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />
         */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/tasks/:_id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;

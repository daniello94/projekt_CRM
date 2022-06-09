import { Link } from "react-router-dom"
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import AddClient from "./routes/AddClient";
import InfoCustomers from "./routes/InfoCustomers";
import {
  Routes,
  Route
} from "react-router-dom";
import "./routes/style/App.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link className="ul-itm" to="/">Login</Link></li>
          <li><Link className="ul-itm" to="/home">Home</Link></li>
          <li><Link className="ul-itm" to="/signUp">Sign Up</Link></li>

        </ul>
      </nav>

      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="addclient" element={<AddClient />} />
        <Route path="infocustomers/:id" element={<InfoCustomers />} />

      </Routes>
    </div>
  )
};
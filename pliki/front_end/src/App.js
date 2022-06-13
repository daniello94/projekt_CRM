import { Link } from "react-router-dom"
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import AddClient from "./routes/AddClient";
import InfoCustomers from "./routes/InfoCustomers";
import Actions from "./routes/Actions";
import {
  Routes,
  Route
} from "react-router-dom";
import "./routes/style/App.css";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  return (
    <div className="App">
      <nav>
        <ul>
         {!user && <li><Link className="ul-itm" to="/">Login</Link></li>}
          {user &&<li><Link className="ul-itm" to="/home">Home</Link></li>}
         {!user &&<li><Link className="ul-itm" to="/signUp">Sign Up</Link></li>} 

        </ul>
      </nav>

      <Routes>
        <Route index element={<Login user={user} setUser={setUser} />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="addclient" element={<AddClient />} />
        <Route path="infocustomers/:id" element={<InfoCustomers />} />
        <Route path="actions/:id" element={<Actions />} />

      </Routes>
    </div>
  )
};
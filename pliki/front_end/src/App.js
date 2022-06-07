import { Link } from "react-router-dom"
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import AddClient from "./routes/AddClient";
import {
  Routes,
  Route
} from "react-router-dom"
export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link className="ul-itm" to="/">Login</Link>
          <Link className="ul-itm" to="/Home">Home</Link>
          <Link className="ul-itm" to="/SignUp">Sign Up</Link>

        </ul>
      </nav>
      <Routes>
        <Route index element={ <Login />}/>
        <Route path="home" element={<Home />}/>
        <Route path="signup"element={<SignUp/>}/>
        <Route path="addclient"element={<AddClient/>}/>
        
      </Routes>

     


    </div>
  )
}
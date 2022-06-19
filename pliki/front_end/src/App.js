import { Link } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import AddClient from "./routes/AddClient";
import InfoCustomers from "./routes/InfoCustomers";
import Actions from "./routes/Actions";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./routes/style/App.css";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
  };
  const logOut = () => {
    localStorage.clear();
    setInterval()
  }

  return (
    <div className="App">
      <nav>
        <ul>
          {!user && (
            <li>
              <Link className="ul-itm" to="/">
                Logowanie
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link onClick={logOut} className="ul-itm" to="/">
                Wyloguj
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link className="ul-itm" to="/home">
                Lista Klientów
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link className="ul-itm" to="/signUp">
                Rejestracja
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          index element={
            <Login user={user} setUser={setUser} />
          } />

        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="addclient" element={<AddClient />} />
        <Route path="infocustomers/:id" element={<InfoCustomers />} />
        <Route path="actions/:id" element={<Actions />} />
      </Routes>
    </div>
  );
};

import React, { useState } from "react";
import axios from "axios";
export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8080/api/user/login',
            ({
                email: email,
                password: password
            }))
            .then((req) => {
                console.log(req.data);
                props.setUser(req.data)
                localStorage.setItem('user', JSON.stringify(req.data))
            })
    }

    return (
        <form onSubmit={userSubmit}>
            <h3>Logowanie</h3>
            <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Podaj Login"></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Podaj Hasło"></input>
            <button className="btn-1" type="submit">Zaloguj</button>
        </form>
    )

};
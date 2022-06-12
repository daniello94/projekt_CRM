import React, { useState } from "react";
import axios from "axios";
export default function Login(props) {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState("");

    const userSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        axios.post('http://127.0.0.1:8080/api/user/login',
        JSON.stringify({
            emails:email,
            passwords:password
        }),
        {'headers':headers})
        .then((req)=>{
            props.setEmail(req.data)
            props.setPassword(req.data)
            localStorage.setItem(JSON.stringify(req.data))
        })
    }

    return (
        <form onSubmit={userSubmit}>
            <h3>Logowanie</h3>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Podaj Login"></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Podaj Hasło"></input>
            <button className="btn-1" type="submit">Zaloguj</button>
        </form>
    )

};
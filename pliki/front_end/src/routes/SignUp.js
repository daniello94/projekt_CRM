import axios from "axios";
import React from "react";

const validate = form => {
    if (!form.email) {
        return "Wpisz email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
        return "Podaj poprawny email"
    }

    if (!form.paswword) {
        return "Wpisz hasło"
    } else if (form.paswword.length < 6) {
        return "Hasło musi zawierać minimum 6 znaków"
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(form.paswword)) {
        return "Hasło musi zawierać znak specjalny np: @ ! # & % $"
    } else if (!/^[^\s]*$/.test(form.paswword)) {
        return "Hasło nie może zawierać pustych znaków"
    }

    if (!form.paswwordRep) {
        return "Powtórz hasło"
    }else if (form.paswwordRep !== form.paswword) {
        return "Podane hasła nie są identyczne"
    }
    return ""
}

export default function Login() {
    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        email: "",
        paswword: "",
        paswwordRep: ""
    })

    const submitFanction = async (e) => {
        e.preventDefault()
        const errorss = validate(form)
        if (errorss) {
            setError(errorss)
            return
        } else {
            const { email, paswword, paswwordRep } = form
            axios.post('http://127.0.0.1:8080/api/user/signup', { email, paswword, paswwordRep })
                .then((res) => {
                    console.log(res.data);
                     setError(<span>Zostałeś zarejestrowany</span>)
                })
                setForm({
                    email: "",
                    paswword: "",
                    paswwordRep: ""
                })
        }

    }

    let StateSignUP = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const { email, paswword, paswwordRep } = form

    return (
        <div >
            <p className="error">{error}</p>
            <form>
                <h3>Rejestracja</h3>
                <input onChange={StateSignUP} value={email} type="email" name="email" placeholder="Podaj email" ></input>
                <input onChange={StateSignUP} value={paswword} type="password" name="paswword" placeholder="Podaj Hasło"></input>
                <input onChange={StateSignUP} value={paswwordRep} type="password" name="paswwordRep" placeholder="Powtórz hasło"></input>
                <button className="btn-1" onClick={submitFanction} type="submit" name="submit" >Zarejestruj</button>
            </form>

        </div>
    );
};
import React from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import "./style/AddClients.css"
const validate = (form) => {
    if (!form.name) {
        return "Wpisz imię"
    };

    if (!form.company) {
        return "Wpisz nazwe Firmy"
    };

    if (!form.nip) {
        return "wpisz NIP"
    } else if (form.nip.length <= 9) {
        return "Podałeś za mało cyfr NIP składa się z 10 liczb"
    } else if (form.nip.length >= 11) {
        return "Podałes za dużo cyf NIP składa się z 10 liczb"
    } else if (/\D/.test(form.nip)) {
        return "Podałeś błędny znak NIP składa sie z samych cyfr"
    }

    return ""
};

export default function AddClient() {
    const [error, setError] = React.useState(null)
    const [form, setForm] = React.useState({
        name: "",
        company: "",
        nip: ""
    });

    const submitClient = (e) => {
        e.preventDefault()
        const errorss = validate(form)
        if (errorss) {
            setError(errorss)
            e.preventDefault()
            return
        } else {
            const { name, company, nip } = form
            axios.post('http://127.0.0.1:8080/api/client/add', { name, company, nip })
                .then((res) => {
                    console.log(res.data);
                    setError(<span>Dodałeś klienta</span>)
                });
                setForm({
                    name: "",
                    company: "",
                    nip: ""
                })
        };
    };

    let stateClient = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const { name, company, nip } = form;
    return (
        <div><p className="error">{error}</p>
            <form>
                <h3>Dodawanie nowego klienta</h3>
                <input type="text" onChange={stateClient} value={name} name="name" placeholder="Podaj Imie"></input>
                <input type="text" onChange={stateClient} value={company} name="company" placeholder="Podaj Firme"></input>
                <input type="text" onChange={stateClient} value={nip} name="nip" placeholder="Podaj NIP"></input>
                <button className="btn-1" type="submit" onClick={submitClient}>Dodaj klienta</button>
            </form>
            <p>Aby wyswietlić listę klientów <Link className="btn-1" to="/home"> kliknij tutaj</Link> </p>

        </div>
    );
};

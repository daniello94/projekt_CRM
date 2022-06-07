import React from "react"
import axios from "axios"
const validate = (form) => {
    if (!form.name) {
        return "Wpisz imię"
    };
    if (!form.company) {
        return "Wpisz nazwe Firmy"
    };
    if (!form.nip) {
        return "wpisz NIP"
    }
    return "Dodano Klijeta"
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
                });
        };
    };
    let Test = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    {

        const { name, company, nip } = form;
        return (
            <div><p>{error}</p>
                <form>
                    <input type="text" onChange={Test} value={name} name="name" placeholder="Podaj Imie"></input>
                    <input type="text"onChange={Test} value={company} name="company" placeholder="Podaj Firme"></input>
                    <input type="text" onChange={Test} value={nip} name="nip" placeholder="Podaj NIP"></input>
                    <button type="submit" onClick={submitClient}>Dodaj Klijeta</button>
                </form>
            </div>
        );
    };
};
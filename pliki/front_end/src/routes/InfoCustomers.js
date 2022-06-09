import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InfoCustomers() {
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [nip, setNip] = useState("");
    const [upodate, setUpodate] = useState('');
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [nr, setNr] = useState("");
    const [zipcode, setZipcode] = useState("");

    let { id } = useParams();


    function editClick(id) {
        setUpodate(id)
    };

    function upodateClient(_id) {
        axios.put('http://127.0.0.1:8080/api/client//upodate/' + id, {
            name, company, nip, adress: {
                city, street, nr, zipcode
            }
        })
            .then(() => {
                setStatus("")

            })
    };

    function oneClient(id) {
        axios.get('http://127.0.0.1:8080/api/client/' + id)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data);
            })
    };

    useEffect(() => {
        oneClient(id)
        setStatus('')
    }, []);

    if (upodate === status.id) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="5"><input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"></input></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2">Firma</th>
                            <td colSpan="3">
                                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} name="company"></input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">NIP</th>
                            <td colSpan="3">
                                <input type="text" value={nip} onChange={(e) => setNip(e.target.value)} name="nip"></input>
                            </td>
                        </tr>
                        <tr>
                            <th>Adress</th>
                            <td>
                                <input type="text" placeholder="Miasto" value={city} onChange={(e) => setCity(e.target.value)} name="city"></input>
                            </td>
                            <td>
                                <input type="text" placeholder="Ulica" value={street} onChange={(e) => setStreet(e.target.value)} name="street"></input>
                            </td>
                            <td>
                                <input type="text" placeholder="numer" value={nr} onChange={(e) => setNr(e.target.value)} name="nr"></input>
                            </td>
                            <td>
                                <input type="text" placeholder="Kod pocztowy" value={zipcode} onChange={(e) => setZipcode(e.target.value)} name="city"></input>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <button className="btn-1" onClick={() => upodateClient(status._id)}>Zapisz</button>
                <button className="btn-1" onClick={(() => setUpodate(""))}>Anuluj</button>
            </div>
        )
    };
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">{status.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><th>Firma</th><td>{status.company}</td></tr>
                    <tr><th>NIP</th><td>{status.nip}</td></tr>
                </tbody>
            </table>
            <button className="btn-1" onClick={() => {
                setName(status.name)
                setCompany(status.company)
                setNip(status.nip)
                setCity(status.adress.city)
                setStreet(status.adress.street)
                setNr(status.adress.nr)
                setZipcode(status.adress.zipcode)
                editClick(status.id)
            }}>Edytuj</button>
        </div>
    )
};


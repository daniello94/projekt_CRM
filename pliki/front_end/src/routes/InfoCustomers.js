import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InfoCustomers() {
    const [status, setStatus] = useState("");
    let { id } = useParams();

    function oneClient(id) {
        axios.get('http://127.0.0.1:8080/api/client/' + id)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data);
            })
    };
    useEffect(() => {
        oneClient(id)
    }, []);

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
            <button className="btn-1">Edytuj</button>
            <button className="btn-1">Dodaj adres</button>

        </div>
    )
};
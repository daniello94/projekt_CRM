import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Client.css";

export default function Client(props) {
    const [remove , setRemove]= useState('')

    function questionDelete(_id){
        setRemove(_id)
    };

    function deleteClient(_id) {
        axios.delete('http://127.0.0.1:8080/api/client/delete/' + _id)
            .then(() => {
                props.dataClient()
            });
    };

    let clientData = props.clientDatas;
    let element = clientData.map((clientDataq) => {

        if(remove === clientDataq._id){
            return(
                <tr>
                <td>
                    {clientDataq.name}
                </td>
                <td>
                    {clientDataq.company}
                </td>
                <td>
                    {clientDataq.nip}
                </td>
                <td>
                    <label>Jesteś pewien?</label><br/>
                    <button className="btn-1" onClick={() => deleteClient(clientDataq._id)}>Tak</button>
                    <button className="btn-1" onClick={() => setRemove('')}>Nie</button>
                </td>
            </tr>
            )
        };

        return (
            <tr key={clientDataq._id}>
                <td>{clientDataq.name}</td>
                <td>{clientDataq.company}</td>
                <td>{clientDataq.nip}</td>
                <td className="akcje">
                <Link className="btn-1" to={`/infocustomers/${clientDataq._id}`}>Więcej informacji</Link>
                    <button className="btn-1" onClick={() => questionDelete(clientDataq._id)}>Usuń klienta</button>
                </td>

            </tr>
        );
    });

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Klienci</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text">Imie</td>
                        <td className="text">Firma</td>
                        <td className="text">NIP</td>
                        <td className="text">Akcje</td>
                    </tr>
                    {element}
                </tbody>
            </table>
            <Link className="btn-1" to="/AddClient">Dodaj</Link>
        </div>
    );
};

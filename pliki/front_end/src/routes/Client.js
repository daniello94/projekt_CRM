import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export default function Client(props) {
    function deleteClient(_id) {
        axios.delete('http://127.0.0.1:8080/api/client/delete/' + _id)
            .then(() => {
                props.dataClient()
            });
    };
    let clientData = props.clientDatas;
    let element = clientData.map((clientDataq) => {
        return (
            <tr key={clientDataq._id}>
                <td>{clientDataq.name}</td>
                <td>{clientDataq.company}</td>
                <td>{clientDataq.nip}</td>
                {/* <td>{clientDataq.adress.city}<br />
                {clientDataq.adress.street}<br/>
                    {clientDataq.adress.nr}<br />{clientDataq.adress.zipcode}
                    </td> */}
                <td>
                    <button>Wiecej informacji</button>
                    <button onClick={() => deleteClient(clientDataq._id)}>Usuń klijęta</button>
                </td>

            </tr>
        );
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Klijęci</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Imie</td>
                        <td>Firma</td>
                        <td>NIP</td>
                        <td>Akcje</td>
                    </tr>
                    {element}
                    <Link to="/AddClient">Dodaj</Link>


                </tbody>
            </table>

        </div>
    );
};

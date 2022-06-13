import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style/Actions.css";
import axios from "axios";
export default function Actions() {
    const [status, setStatus] = useState("");
    const [contactNr, setContactNr] = useState("");
    const [contact, setContact] = useState("");
    const [visit, setVisit] = useState("");
    const [textarea, setTextarea] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    let { id } = useParams();
    function upodateClient(_id) {
        axios.put('http://127.0.0.1:8080/api/client//upodate/' + id, {
            actions: {
                contactNr, contact, visit, textarea, startDate
            }
        })
            .then(() => {
                console.log("");
            })
    };

    useEffect(() => {
        setStatus('')
    }, []);

    return (
        <div className="actions-form">
            <form className="form">
                <label className="label">Forma kontaktu:
                    <select className="select" name="contact" onChange={(e) => setContact(e.target.value)}>
                        <option>Wybierz</option>
                        <option>Telefon</option>
                        <option>WhatUp</option>
                    </select><br />
                    <input className="input" type="phone" name="contactNr" onChange={(e) => setContactNr(e.target.value)} placeholder="Podaj nr kontaktowy"></input>
                </label><br />
                <label className="label">Miejsce Spodkania:
                    <select className="select-1" name="visit" onChange={(e) => setVisit(e.target.value)} >
                        <option>Wybierz</option>
                        <option>u klienta</option>
                        <option>w firmie</option>
                    </select>
                </label><br />
                <label className="label">Wybierz date kontaktu
                    <div className="date">
                        <DatePicker className="dete-1" name="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </label>
                <textarea className="textarea" name="textarea" onChange={(e) => setTextarea(e.target.value)} placeholder="Krótki opis"></textarea><br />
                <button className="btn-1" type="submit" onClick={(e) => {
                    e.preventDefault()
                    upodateClient(status._id)
                }}>Dodaj</button>
                <Link className="btn-1" to={`/infocustomers/${id}`}>Anuluj</Link>
            </form>

        </div>
    )
}
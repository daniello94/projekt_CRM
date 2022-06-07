import React, { Component } from "react";
import axios from "axios";
import Client from "./Client";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientData: []
        }
    }
    componentDidMount=()=>{
        this.dataClient();
    }
    dataClient=()=>{
        axios.post('http://127.0.0.1:8080/api/client/all')
        .then(res =>{
            this.setState({
                clientData:res.data
            })
            console.log(res.data);
        })

    }
    render(){
        return(
            <div>
            <Client clientDatas={this.state.clientData} dataClient={this.dataClient}/>
            </div>
        )
    }
}
export default Home
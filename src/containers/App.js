import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import ListBox from '../components/ListBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            people: [],
            planets: [],
            films: [],
            species: [],
            vehicles: [],
            starships: []
        };
    }

    async componentDidMount() {
        const api_obj = await this.fetchAPI("https://swapi.co/api/")

        for (let api_name in api_obj) {
            let resp = await this.fetchAPI(api_obj[api_name]);
            this.setState({[api_name]: resp});
        }        
    }


    render() {
        const lsts = this.state;
        return (
            <div className="App bg-light-blue w-100 h-100">
                <Header />
                <ListBox lsts={lsts} />
            </div>
        );
    }

    async fetchAPI(url) {
            const resp = await fetch(url);
            const resp_json = await resp.json();
            return resp_json;
    }
}

export default App;

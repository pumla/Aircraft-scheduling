import React from 'react';
import routes from './config/routes'
import getPosition from "./utils/getPosition";
import './App.css';
import { AppContainer, ErrorMessage } from './styles/global'
import Aircrafts from './components/Aircrafts'
import Flights from './components/Flights'
import Times from './components/Times'
import Date from './components/Date'
import Slider from './components/Timeline'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aircrafts: [],
            flights: [],
            error: ''
        };
    }
    componentDidMount() {
        fetch(routes.aircrafts)
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        aircrafts: result.data
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }
    getFlights = (time) => {
        const { flights } = this.state
        if (flights.length === 0) {
            return [ time ]
        }
        const position = getPosition(flights, time);
        if(position === null) {
            return false
        }
        let newFlights = [...flights];
        newFlights.splice(position, 0, time)

        return newFlights
    }

    handleAdd = (time) => {
        const flights = this.getFlights(time);
        if(flights) {
            this.setState({ flights })
        }
    }

    handleRemove = (flight) => {
        const flights = this.state.flights.filter(elem => elem.id !== flight.id);
        this.setState({ flights })
    }

    render() {
        const { error, aircrafts: [ aircraft ], flights } = this.state;
        return (
            <AppContainer>
                <Date />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Aircrafts aircraft={aircraft} />
                <Flights aircraft={aircraft} flights={flights} handleRemove={this.handleRemove}/>
                <Times flights={flights} handleAdd={this.handleAdd} />
                <Slider items={flights}/>
            </AppContainer>
        );
    }

}

export default App;

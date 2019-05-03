import React from 'react';

import { ListWrapper, Header } from '../../styles/global'
import { FlightsWrapper } from './styles'
import Flight from '../Flight'

const FlightsList = ({ flights, aircraft: { ident }, handleRemove }) => {
    return <FlightsWrapper>
        <ListWrapper>
            <Header>Rotation {ident}</Header>
            {flights.map((flight, index) => {
                const disabled = ![0, flights.length-1].includes(index)
                return (<Flight key={flight.id} flight={flight} handleClick={handleRemove} chosen disabled={disabled} />)
            })}
        </ListWrapper>
    </FlightsWrapper>
}

FlightsList.defaultProps = {
    flights: [],
    aircraft: {}
};

export default FlightsList
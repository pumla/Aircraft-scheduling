import React from 'react';
import { ListWrapper, ListElement, Header } from '../../styles/global'
import { AircraftsWrapper } from './styles'

const AircraftsList = ({ aircraft: { ident} }) => (<AircraftsWrapper>
    <ListWrapper>
        <Header>Aircrafts</Header>
        {ident && <ListElement key={ident}>{ident}</ListElement>}
    </ListWrapper>
</AircraftsWrapper>)

AircraftsList.defaultProps = {
    aircraft: {}
}

export default AircraftsList
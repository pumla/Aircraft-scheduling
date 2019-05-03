import React from 'react';
import { Button, ListElement, ListElementHeader, ListElementContent, SmallLabel } from '../../styles/global'
import { Arrow } from '../Flight/styles'

const Flight = ({ flight, chosen, disabled, handleClick }) => {
    const { id, origin, destination, readable_departure, readable_arrival } = flight;
    return <ListElement disabled={!chosen && disabled}>
        <ListElementHeader>
            <span>Flight: {id}</span>
            <Button disabled={disabled} onClick={() => !disabled && handleClick(flight)}>{chosen ? <span>&#8722;</span> : <span>&#43;</span>}</Button>
        </ListElementHeader>
        <ListElementContent>
            <div>
                <SmallLabel>org</SmallLabel>
                <div>{origin}</div>
                <div>{readable_departure}</div>
            </div>
            {chosen && <Arrow>&#8594;</Arrow>}
            <div>
                <SmallLabel>dest</SmallLabel>
                <div>{destination}</div>
                <div>{readable_arrival}</div>
            </div>
        </ListElementContent>
    </ListElement>
}

export default Flight
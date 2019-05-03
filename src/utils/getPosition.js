import { dayLength, turnaroundTime } from '../config/time'

const canTurnAround = (start, end) => end - start >= turnaroundTime

const canPrepend = (flight, time) => flight.origin === time.destination
    && canTurnAround(time.arrivaltime, flight.departuretime)

const canAppend = (flight, time) => flight.destination === time.origin
    && canTurnAround(flight.arrivaltime, time.departuretime)
    && time.arrivaltime < dayLength

const getPosition = (flights, time) => {
    if(!flights.length) {
        return null
    }
    if(canPrepend(flights[0], time)) {
        return 0;
    }
    if(canAppend(flights[flights.length - 1], time)) {
        return flights.length;
    }

    const canPrependIndex = flights.findIndex(flight => canPrepend(flight, time))
    if(canPrependIndex !== -1 && canAppend(flights[canPrependIndex-1], time)) {
        return canPrependIndex
    }

    return null
}

export default getPosition

import React from 'react';
import { DateLabel } from './styles'

function getDate() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return tomorrow.toDateString();
}

const DateHeader = () => <DateLabel>Aircraft scheduling - {getDate()}</DateLabel>

export default DateHeader
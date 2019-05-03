import React from 'react';
import { scheduled } from '../../config/status'
import calculateTimeline from '../../utils/calculateTimeline'
import { Slider, Item, TimelineWrapper, TotalPercentage } from './styles'
import DatesList from './Dates'

const Timeline = ({ items }) => {
    const timeline = calculateTimeline(items)
    const totalScheduled = timeline.reduce((acc, current) => {
        const [status, percent] = current
        const value = (status === scheduled ? percent : 0)
        return acc + value
    }, 0)
    return <TimelineWrapper>
        <DatesList />
        <Slider>
            {timeline.map((elem, index) => {
                const [status, percent] = elem;
                return <Item key={index} status={status} width={percent}>{percent}%</Item>
            })}
        </Slider>
        Total scheduled: <TotalPercentage>{totalScheduled.toFixed(2)}%</TotalPercentage>
    </TimelineWrapper>
}

export default Timeline
import styled from 'styled-components';

const Dates = styled.div`
    display: flex;
    flex: 1 100%;
    flex-flow: wrap;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20px 0 10px;
`;

const Slider = styled.div`
    display: flex;
    flex: 1 100%;
    flex-flow: wrap;
    flex-wrap: nowrap;
    font-weight: 500;
    word-break: break-all;
    text-align: center;
    margin-bottom: 10px;
`;

const getColor = (status) => {
    let color = '#ccc'
    if (status === "scheduled") {
        color = "#65A871"
    } else if (status === "turnaround") {
        color = "#B397E8"
    }

    return color;
}

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => getColor(props.status)};
    width: ${props => props.width}%;
    padding: 10px 0;
`
const TimelineWrapper = styled.div`
    flex: 1 100%;
    margin: 0 5px 30px;
`

const TotalPercentage = styled.span`
    font-weight: 900;
`

export {
    Slider,
    Item,
    TimelineWrapper,
    Dates,
    TotalPercentage
}
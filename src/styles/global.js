import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background: linear-gradient(to right, #383D50, #473C5C);
    height: 50vh;
    padding: 0 5%
`;

const ErrorMessage = styled.div`
    color: white;
    background: #F76C6C;
    flex: 1 100%;
    padding: 10px;
    min-width: 200px;
    margin: 0 5px 10px;
`;

const ListWrapper = styled.section`
    flex: 1 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: start;
    background: rgb(227, 227, 227);
    margin: 0 5px;
    padding: 0 10px;
    height: 100%;
    border-bottom: 2px solid #ccc;
`;

const ListElement = styled.section`
    opacity: ${props => props.disabled ? '0.5' : '1'}
    background: white;
    color: black;
    border-radius: 3px;
    border-bottom: 1px solid rgb(204, 204, 204);
    padding: 10px;
    margin-bottom: 10px;
    min-width: 140px;
`;

const ListElementHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    font-weight: 500;
`;

const ListElementContent = styled.div`
     display: flex;
     justify-content: space-between;
`;

const SmallLabel = styled.div`
     font-size: 9px;
     font-weight: 900;
     text-transform: uppercase;
`;

const Header = styled.header`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    text-align: center;
    margin: 10px 0 15px;
    flex: 100%;
`;

const Button = styled.button`
     border: none;
     outline: none;
     background: #9AA7DB;
     font-size: 14px
     font-weight: 500;
     color: black;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 20px;
     height: 20px;
     ${props => props.disabled ? 'opacity: 0.5; cursor: default' : 'opacity: 1; cursor: pointer'}
`;

export {
    AppContainer,
    ErrorMessage,
    ListWrapper,
    ListElement,
    ListElementHeader,
    ListElementContent,
    SmallLabel,
    Header,
    Button
}

import React from 'react';
import ReactPaginate from 'react-paginate';
import routes from '../../config/routes'
import { ErrorMessage, ListWrapper, Header } from '../../styles/global'
import { TimesContainer, PaginationWrapper } from './styles'
import Flight from '../Flight'
import getPosition from "../../utils/getPosition";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: '',
            items: [],
            offset: 0,
            limit: 20
        };
    }
    componentDidMount() {
        this.loadTimes()
    }
    loadTimes() {
        fetch(`${routes.flights}?offset=${this.state.offset}&limit=${this.state.limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data,
                        pageCount: Math.ceil(result.pagination.total / result.pagination.limit),
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.limit);

        this.setState({ offset }, () => {
            this.loadTimes();
        });
    };

    render() {
        const { items, pageCount, error} = this.state;
        return <TimesContainer>
            <ListWrapper>
            <Header>Flights</Header>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {items.map(flight => {
                    const { flights, handleAdd } = this.props
                    const disabled = getPosition(flights, flight) === null && flights.length > 0
                    return <Flight key={flight.id} flight={flight} handleClick={handleAdd} disabled={disabled} />
                }) }
                <PaginationWrapper>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </PaginationWrapper>
        </ListWrapper>
    </TimesContainer>
    }
}

export default List
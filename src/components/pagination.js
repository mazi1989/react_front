import React, { Component } from 'react';

class Pagination extends Component {
    constructor (props) {
        super(props);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);

        this.state = { 
            actualPage: 1,
            actualQuery: '' 
        };
    }

    handlePreviousClick () {
        const { actualPage } = this.state;
        this.props.getNewData('?page=' + (actualPage - 1));
        this.setState ({ actualPage: (actualPage - 1) });
    }

    handleNextClick () {
        const { actualPage } = this.state;
        this.props.getNewData('?page=' + (actualPage + 1));
        this.setState ({ actualPage: (actualPage + 1) });
    }

    render() {
        const { totalPageNumber } = this.props;
        const { actualPage } = this.state;
        
        const previousButton = actualPage !== 1 ? <button onClick={this.handlePreviousClick}>Previous</button> : 
        <button onClick={this.handlePreviousClick} disabled>Previous</button>
        
        const nextButton = actualPage !== totalPageNumber ? <button onClick={this.handleNextClick}>Next</button> : 
        <button onClick={this.handleNextClick} disabled>Next</button>

        return (
            <div>
                {previousButton}
                {nextButton}
            </div>
        );
    }
}

export default Pagination;

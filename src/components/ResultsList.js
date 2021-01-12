import React, { Component } from 'react';
import ResultCard from './ResultCard';
import * as api from './api';

class ResultsList extends Component {
  state = {
    isLoading: true,
    results: []
  }

  render() {
    const { isLoading, results } = this.state
    return (
      <div className="resultsList">
        {
          isLoading === true ?
            <div className="loader">Loading...</div>
            :
            results.map((result, index) => {

              return (
                <>
                  <ResultCard result={result} index={index} key={result.id} />
                </>
              )

            })
        }
      </div>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    api.getResults().then(results => {
      this.setState({
        results: results,
        isLoading: false
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const resultsChange = (prevProps.results !== this.props.results);
    const filterChange = (prevProps.filteredResults !== this.props.filteredResults);
    if (resultsChange) {
      this.setState({
        results: this.props.results
      })
    }

    if (filterChange) {
      this.setState({
        results: this.props.filteredResults
      })
    }

  }

}

export default ResultsList;

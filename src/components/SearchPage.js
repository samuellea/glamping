import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import Filter from './Filter';
import ResultsList from './ResultsList';
import * as api from './api';

class SearchPage extends Component {

  state = {
    results: [],
    filterTerms: [],
    filteredResults: []
  }

  handleAccommodationClick = (event) => {
    const { target: { value } } = event
    this.setState({
      sortBy: value
    })
  }

  updateFilterTerms = (term) => {
    const { filterTerms } = this.state;
    if (!filterTerms.includes(term)) {
      let newTerms = [...filterTerms, term];
      this.setState({
        filterTerms: newTerms
      })
    } else {
      let index = filterTerms.indexOf(term);
      let newTerms = [...filterTerms];
      newTerms.splice(index, 1);
      this.setState({
        filterTerms: newTerms
      })
    }
  }

  render() {
    const { filterTerms } = this.state;
    return (
      <div className="searchPage">
        <Container className="searchPageContainer" fluid={true}>

          <Row className="jumbo">
            JUMBO
          </Row>

          <div className="searchBarContainer">
            <SearchBar />
          </div>

          <Row className="resultsBanner">
            RESULTSBANNER
          </Row>

          <div className="filterAndResultsContainer">
            <Row className="filterAndResults">
              <Col xs={12} md={4} className="filterContainer">
                <Filter updateFilterTerms={this.updateFilterTerms} />
              </Col>
              <Col xs={12} md={8} className="resultsContainer">
                <ResultsList filteredResults={this.state.filteredResults} />
              </Col>
            </Row>
          </div>


        </Container>
      </div>
    )
  }

  componentDidMount() {
    api.getResults().then(data => {
      this.setState({
        results: data,
        filteredResults: data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const filterChange = (prevState.filterTerms !== this.state.filterTerms);
    const { results, filterTerms } = this.state;

    if (filterChange) {
      if (filterTerms.length == 0) {
        this.setState({
          filteredResults: results
        })
      } else {
        let resultsFiltered = [];

        results.forEach(result => {
          let keywords = [...result.activities, ...result.pitches];
          let keywordsContainsAllFilterTerms = filterTerms.every(elem => keywords.indexOf(elem) > -1);
          let objAlreadyInOutput = resultsFiltered.some(e => e.id == result.id);
          if (keywordsContainsAllFilterTerms && !objAlreadyInOutput) {
            resultsFiltered.push(result)
          }
        })

        this.setState({
          filteredResults: resultsFiltered
        })

      }

    }

  }


}

export default SearchPage;
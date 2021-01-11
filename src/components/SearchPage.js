import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import Filter from './Filter';
import ResultsList from './ResultsList';
import Footer from './Footer';
import * as api from './api';
import Purpletent from '../assets/camping-tent-purp.svg';

class SearchPage extends Component {

  state = {
    results: [],
    filterTerms: [],
    filteredResults: [],
    location: 'any location'
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

  clearFilterTerms = () => {
    console.log('reaching clearFilterTerms');
    this.setState({
      filterTerms: []
    })
  }

  receiveSearchResults = (refinedResults, location) => {
    console.log('reaching performSearch')
    if (location === 'Any Location') location = 'any location';
    console.log(refinedResults, '!');
    this.setState({
      results: refinedResults,
      location: location
    })
  }

  render() {
    const { filterTerms, filteredResults } = this.state;

    return (
      <div className="searchPage">
        <Container className="searchPageContainer" >

          <Row className="jumbo">
            {/* JUMBO */}
            <img src={Purpletent} class="card-img-top img-fluid purpletent" />
            <p className="jumbotext h4 animate-flicker">Homes away from home</p>


          </Row>

          <div className="searchBarContainerWrapper">
            <Row className="searchBarContainer ">
              <SearchBar receiveSearchResults={this.receiveSearchResults} />
            </Row>
          </div>



          <Row className="resultsBanner font-weight-bold h3">
            {
              filteredResults.length > 0
                ?
                <p>
                  <span className="resultsText"> Glampsites found in </span>
                  <span className="resultsCountry">{this.state.location} - </span>
                  <span className="resultsNumber">{filteredResults.length}</span>
                  <span className="resultsEnd"> results.</span>

                </p>
                :
                <p>No glampsites match your criteria.</p>
            }
          </Row>

          <div className="filterAndResultsContainer">
            <Row className="filterAndResults">
              <Col xs={12} md={4} className="filterContainer no-gutters">
                <Filter updateFilterTerms={this.updateFilterTerms} clearFilterTerms={this.clearFilterTerms} />
              </Col>
              <Col xs={12} md={8} className="resultsContainer">
                <ResultsList results={this.state.results} filteredResults={this.state.filteredResults} />
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
    console.log('searchPage UPDATED ///////////////////////')
    const filterChange = (prevState.filterTerms !== this.state.filterTerms);
    const resultsChange = (prevState.results !== this.state.results)
    const { results, filterTerms } = this.state;

    if (filterChange || resultsChange) {
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
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";
import * as api from './api';

class SearchBar extends Component {

  state = {
    checkIn: null,
    checkOut: null,
    location: 'Any Location',
    checkInMonth: 0,
    checkOutMonth: 0
  };

  render() {
    const { location, checkIn, checkOut } = this.state;
    const FORMAT = "dd/MM/yyyy";

    const handleCheckInClick = (date) => {
      let stringDate = date.toString();
      if (Date.parse(checkOut) <= Date.parse(stringDate) || checkOut == null) {
        let dateCloned = new Date(stringDate);
        let dayAfterDate = dateCloned.setDate(dateCloned.getDate() + 1);
        this.setState({
          checkOut: new Date(dayAfterDate).toString()
        })
        // AND make the displayed month on the check OUT datepicker the same month as the checkOut date now in state
      }
      this.setState({
        checkIn: date.toString(),
        checkInMonth: date.getMonth()
      })
    }

    const handleCheckOutClick = (date) => {
      let stringDate = date.toString();
      if (Date.parse(checkIn) >= Date.parse(stringDate) || checkIn == null) {
        let dateCloned = new Date(stringDate);
        let dayBeforeDate = dateCloned.setDate(dateCloned.getDate() - 1);
        this.setState({
          checkIn: new Date(dayBeforeDate).toString(),
        })
        // AND make the displayed month on the check IN datepicker the same month as the checkIn date now in state
      }
      this.setState({
        checkOut: date.toString(),
        checkOutMonth: date.getMonth()
      })
    }

    const locationClicker = (location) => {
      this.setState({
        location: location
      })
    }

    const handleFindClick = () => {
      api.getResults(location, checkIn, checkOut).then(refinedResults => {
        this.props.receiveSearchResults(refinedResults, location);
      })
    };

    return (
      <Row className="searchBar">

        <Col xs={6} md={3} className="location" >
          <div className="borderBox">
            <Dropdown variant="danger" style={{ width: '100%', height: "100%" }}>
              <Dropdown.Toggle id="dropdown-custom-1" style={{ width: '100%', height: "100%" }}>
                {this.state.location}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: '100%' }}>
                <Dropdown.Item onClick={() => locationClicker("Any Location")}>Any Location</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => locationClicker("England")}>England</Dropdown.Item>
                <Dropdown.Item onClick={() => locationClicker("Scotland")}>Scotland</Dropdown.Item>
                <Dropdown.Item onClick={() => locationClicker("Wales")}>Wales</Dropdown.Item>
                <Dropdown.Item onClick={() => locationClicker("Ireland")}>Ireland</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>


        </Col >

        <Col xs={6} md={3} className="checkIn">
          <div className="borderBox">

            <div className="calendarInput">

              <div className="left">
                <Dropdown >
                  <Dropdown.Toggle id="dropdown-custom-2">
                    <i class="fas fa-calendar-day fa-lg"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <DayPicker
                      month={new Date(2021, this.state.checkInMonth)}
                      onDayClick={(day) => handleCheckInClick(day)}
                      selectedDays={new Date(this.state.checkIn)}
                      disabledDays={[
                        {
                          before: new Date(),
                        },
                      ]}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="right">
                {
                  checkIn == null ?
                    <span>Any date</span>
                    :
                    <span>{`${dateFnsFormat(new Date(this.state.checkIn), FORMAT)}`}</span>
                }
              </div>

            </div>

          </div>
        </Col>

        <Col xs={6} md={3} className="checkOut">
          <div className="borderBox">

            <div className="calendarInput">

              <div className="left">

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-2">
                    <i class="fas fa-calendar-day fa-lg"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <DayPicker
                      month={new Date(2021, this.state.checkOutMonth)}
                      onDayClick={(day) => handleCheckOutClick(day)}
                      selectedDays={new Date(this.state.checkOut)}
                      disabledDays={[
                        {
                          before: new Date(),
                        },
                      ]}
                    />
                  </Dropdown.Menu>
                </Dropdown>


              </div>

              <div className="right">

                {
                  checkIn == null ?
                    <span>Any date</span>
                    :
                    <span>{`${dateFnsFormat(new Date(this.state.checkOut), FORMAT)}`}</span>
                }

              </div>

            </div>
          </div>
        </Col>

        <Col xs={6} md={3} className="findButton">
          <Button className="greenButton searchButton" onClick={() => handleFindClick()}>
            FIND
          </Button>
        </Col>
      </Row >
    )
  }

  componentDidMount() {
    let today = new Date();
    let todayCloned = new Date(today.toString());
    let tomorrow = todayCloned.setDate(todayCloned.getDate() + 1);

    this.setState({
      checkIn: null,
      checkOut: null
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { checkIn, checkOut } = this.state;
    const monthChange = prevState.checkInMonth !== this.state.checkInMonth || prevState.checkOutMonth !== this.state.checkOutMonth;
    if (monthChange) {
      this.setState({
        checkInMonth: new Date(checkIn).getMonth(),
        checkOutMonth: new Date(checkOut).getMonth()
      })
    }

  }

}

export default SearchBar;
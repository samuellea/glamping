import React, { Component } from 'react';

class Filter extends Component {
  state = {
    accommodationMenu: 'closed',
    activitiesMenu: 'closed',
    accommodationOptions: [
      { name: 'camping', checked: false },
      { name: 'yurts', checked: false },
      { name: 'caravans', checked: false },
      { name: 'shepherd huts', checked: false },
      { name: 'hobbit holes', checked: false },
      { name: 'elven ruins', checked: false },
      { name: 'communes', checked: false },
    ],
    activitiesOptions: [
      { name: 'water sports', checked: false },
      { name: 'hiking', checked: false },
      { name: 'villages', checked: false },
      { name: 'questing', checked: false },
      { name: 'elevenses', checked: false },
      { name: 'music', checked: false },
      { name: 'arts', checked: false },
    ]
  };

  handleClearClick = (event) => {
    const { target: { value } } = event
    let statePropToUpdate = `${value}Options`;
    let optionsToClear = [...this.state[statePropToUpdate]];
    optionsToClear.forEach(option => {
      option.checked = false;
    })
    this.setState({
      [statePropToUpdate]: optionsToClear
    })

    this.props.clearFilterTerms();
  }

  handleMenuClick = (value) => {
    const { accommodationMenu, activitiesMenu } = this.state;
    // const { target: { value } } = event
    if (value === 'accommodation') {
      if (accommodationMenu === 'closed') {
        this.setState({
          accommodationMenu: 'open'
        })
      } else {
        this.setState({
          accommodationMenu: 'closed'
        })
      }
    } else if (value === 'activities') {
      if (activitiesMenu === 'closed') {
        this.setState({
          activitiesMenu: 'open'
        })
      } else {
        this.setState({
          activitiesMenu: 'closed'
        })
      }
    }
  }

  handleOptionClick = (name, category) => {

    this.props.updateFilterTerms(name);

    let statePropToUpdate = `${category}Options`;
    let res = this.state[statePropToUpdate].find((obj) => obj.name === name);
    let index = this.state[statePropToUpdate].indexOf(res);
    let updatedObj = res;

    if (this.state[statePropToUpdate][index].checked === false) {
      updatedObj.checked = true;
    } else {
      updatedObj.checked = false;
    }

    let toUpdate = [...this.state[statePropToUpdate]];
    toUpdate.splice(index, 1, updatedObj);
    this.setState({
      [statePropToUpdate]: toUpdate
    })

  };

  render() {
    const { accommodationMenu, activitiesMenu, accommodationOptions, activitiesOptions } = this.state;
    return (
      <>
        <div className="filterLabel labelFontsize">Filter</div>
        <div className={`accommodation ${accommodationMenu}`}>

          <div className="optionSegment labelFontsize">
            <div className="optionSection">
              Accommodation
            </div>
            <button onClick={this.handleClearClick} className="clearButton" value="accommodation">Clear</button>

            <button onClick={this.handleMenuClick} className="openButton" >
              <i class={`fas fa-chevron-down fa-lg arrow-${accommodationMenu}`} onClick={() => this.handleMenuClick('accommodation')}></i>
            </button>

          </div>

          <ul>
            {accommodationOptions.map(option => {
              return (

                <div className="filterOption" onClick={() => this.handleOptionClick(option.name, 'accommodation')}>
                  <div className="left">
                    <i className={option.checked === false ? "far fa-square" : "fas fa-check-square"}></i>
                  </div>
                  <div className="right">
                    {option.name.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                  </div>
                </div>

              )
            })}
          </ul>

        </div>
        <div className={`activities ${activitiesMenu}`}>

          <div className="optionSegment labelFontsize">
            <div className="optionSection">
              Activities
            </div>
            <button onClick={this.handleClearClick} value="activities" className="clearButton">Clear</button>

            <button onClick={this.handleMenuClick} className="openButton" >
              <i class={`fas fa-chevron-down fa-lg arrow-${activitiesMenu}`} onClick={() => this.handleMenuClick('activities')}></i>
            </button>

          </div>

          <ul>
            {activitiesOptions.map(option => {
              return (

                <div className="filterOption" onClick={() => this.handleOptionClick(option.name, 'activities')}>
                  <div className="left">
                    <i className={option.checked === false ? "far fa-square" : "fas fa-check-square"}></i>
                  </div>
                  <div className="right">
                    {option.name.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                  </div>
                </div>

              )
            })}
          </ul>

        </div>
      </>
    )
  }

}

export default Filter;

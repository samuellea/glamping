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

  handleMenuClick = (event) => {
    const { accommodationMenu, activitiesMenu } = this.state;
    const { target: { value } } = event
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
        <div className="filterLabel">Filter</div>
        <div className={`accommodation ${accommodationMenu}`}>
          Accommodation
        <button onClick={this.handleMenuClick} value="accommodation">Click</button>

          <ul>
            {accommodationOptions.map(option => {
              return (

                <div className="filterOption" onClick={() => this.handleOptionClick(option.name, 'accommodation')}>
                  <span><i className={option.checked === false ? "far fa-circle" : "fas fa-check-circle"}></i></span>
                  {option.name}
                </div>

              )
            })}
          </ul>

        </div>
        <div className={`activities ${activitiesMenu}`}>
          Activities
        <button onClick={this.handleMenuClick} value="activities">Click</button>

          <ul>
            {activitiesOptions.map(option => {
              return (

                <div className="filterOption" onClick={() => this.handleOptionClick(option.name, 'activities')}>
                  <span><i className={option.checked === false ? "far fa-circle" : "fas fa-check-circle"}></i></span>
                  {option.name}
                </div>

              )
            })}
          </ul>

        </div>
      </>
    )
  }

  componentDidUpdate() {
    console.log('Filter UPDATED')
  }
}

export default Filter;

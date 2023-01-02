import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onSelectCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )

    return activeCountryAndCapital.country
  }

  capitalsList = countryDetails => {
    const capital = countryDetails.capitalDisplayText
    const uniqueId = countryDetails.id
    return (
      <option key={uniqueId} value={uniqueId}>
        {capital}
      </option>
    )
  }

  render() {
    const {activeCapital} = this.state

    const country = this.getCountry(activeCapital)

    return (
      <div className="capital-bg-container">
        <div className="capital-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              onChange={this.onSelectCapital}
              value={activeCapital}
              className="select-options"
            >
              {countryAndCapitalsList.map(eachCountry =>
                this.capitalsList(eachCountry),
              )}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

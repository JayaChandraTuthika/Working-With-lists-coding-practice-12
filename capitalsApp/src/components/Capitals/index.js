import {Component} from 'react'
import './index.css'
import CapitalItems from '../CapitalItems'

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
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  selectThisCountry = event => {
    this.setState({
      selectedCapitalId: event.target.value,
    })
  }

  render() {
    const {selectedCapitalId} = this.state

    const selectedCountryDetails = countryAndCapitalsList.find(
      each => each.id === selectedCapitalId,
    )

    return (
      <div className="bg-container">
        <div className="inner-card">
          <h1>Countries And Capitals</h1>
          <div className="item-select-container">
            <select
              className="select-capital-box"
              onChange={this.selectThisCountry}
            >
              {countryAndCapitalsList.map(country => (
                <CapitalItems countryDetails={country} key={country.id} />
              ))}
            </select>
            <p className="country-ask-text">is capital of which country?</p>
          </div>
          <p className="country">{selectedCountryDetails.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

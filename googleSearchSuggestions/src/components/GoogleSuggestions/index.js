import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  addInputSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="inner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                className="search-input"
                placeholder="Search Google"
                type="search"
                value={searchInput}
                onChange={this.onSearch}
              />
            </div>

            <ul className="suggestions-container">
              {filteredList.map(each => (
                <SuggestionItem
                  suggestion={each.suggestion}
                  key={each.id}
                  todo={this.addInputSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

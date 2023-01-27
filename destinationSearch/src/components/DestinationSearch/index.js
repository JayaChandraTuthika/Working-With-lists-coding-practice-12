import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="inner">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="cards-container">
            {searchList.map(item => (
              <DestinationItem
                name={item.name}
                imgUrl={item.imgUrl}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch

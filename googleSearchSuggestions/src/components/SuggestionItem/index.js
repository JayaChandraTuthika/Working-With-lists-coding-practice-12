import './index.css'

const SuggestionItem = props => {
  const {suggestion, todo} = props
  const addToInput = () => {
    todo(suggestion)
  }

  return (
    <li className="list-item">
      <p className="list-item-text">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={addToInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

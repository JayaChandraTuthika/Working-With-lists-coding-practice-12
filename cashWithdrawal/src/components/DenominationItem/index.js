import './index.css'

const DenominationItem = props => {
  const {value, deduct} = props

  const removeAmount = event => {
    deduct(event.target.value)
  }
  return (
    <li>
      <button
        className="denomination-item"
        onClick={removeAmount}
        value={value}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

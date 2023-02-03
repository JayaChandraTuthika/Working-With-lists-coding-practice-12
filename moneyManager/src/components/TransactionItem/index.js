import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteHistoryItem} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteItem = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="grid-value">{title}</p>
      <p className="grid-value">Rs {amount}</p>
      <p className="grid-value">{type}</p>
      <button
        className="delete-btn"
        type="button"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem

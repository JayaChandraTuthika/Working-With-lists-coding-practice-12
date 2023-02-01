import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails

  return (
    <li className="list-item">
      <p className="grid-value">{title}</p>
      <p className="grid-value">{amount}</p>
      <p className="grid-value">{type}</p>
    </li>
  )
}

export default TransactionItem

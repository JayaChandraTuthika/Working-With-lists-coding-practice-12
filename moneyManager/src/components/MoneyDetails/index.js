import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <div className="second-container">
      <div className="total-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="card-inside-img"
        />
        <div>
          <p className="card-para-1">Your Balance</p>
          <p className="card-para-2" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="card-inside-img"
        />
        <div>
          <p className="card-para-1">Your Income</p>
          <p className="card-para-2" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="card-inside-img"
        />
        <div>
          <p className="card-para-1">Your Expenses</p>
          <p className="card-para-2" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

import './index.css'

const AppointmentItem = props => {
  const {itemDetails, onToggleStar} = props
  const {title, date, isStarred, id} = itemDetails

  const toggleStar = () => {
    onToggleStar(id)
  }

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item">
      <div>
        <p className="app-title">{title}</p>
        <p className="app-date">Date: {date}</p>
      </div>
      <button
        type="button"
        className="star-btn"
        onClick={toggleStar}
        data-testid="star"
      >
        <img src={starImgUrl} className="star-image" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem

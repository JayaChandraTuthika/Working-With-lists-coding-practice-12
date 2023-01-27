import './index.css'

const Logout = props => {
  const {event} = props
  return (
    <button className="button" onClick={event} type="button">
      Logout
    </button>
  )
}

export default Logout

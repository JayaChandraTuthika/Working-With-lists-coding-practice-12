import './index.css'

const Login = props => {
  const {event} = props
  return (
    <button className="button" onClick={event} type="button">
      Login
    </button>
  )
}

export default Login

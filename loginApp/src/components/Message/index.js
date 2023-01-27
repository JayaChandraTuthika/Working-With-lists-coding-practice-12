import './index.css'

const Message = props => {
  const {content} = props
  return <h1 className="heading">{`${content}`}</h1>
}

export default Message

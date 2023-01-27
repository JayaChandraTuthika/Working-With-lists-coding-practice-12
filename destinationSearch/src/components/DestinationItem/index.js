import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="card-item">
      <img src={imgUrl} className="card-image" alt={`${name}`} />
      <p className="card-text">{name}</p>
    </li>
  )
}

export default DestinationItem

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, onClickChangeImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const changeActiveImage = () => {
    onClickChangeImage(id)
  }
  const selectedClass = isActive ? 'active-thumbnail' : ''
  return (
    <li className="list-item">
      <button className="button" type="button" onClick={changeActiveImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${selectedClass}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

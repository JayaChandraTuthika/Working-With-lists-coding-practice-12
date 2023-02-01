import './index.css'

const CommentItem = props => {
  const {commentsDetails, onLikeComment, onDelComment} = props
  const {id, name, comment, time, isLiked, initialColor} = commentsDetails

  const onLike = () => {
    onLikeComment(id)
  }

  const onDel = () => {
    onDelComment(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeButtonClass = isLiked ? 'like-button-activated' : 'like-button'

  return (
    <li className="list-item-container">
      <div className="list-item-first-container">
        <p className={`${initialColor}`}>{name[0].toUpperCase()}</p>
        <div className="comment-text-container">
          <p className="name">
            {name}
            <span className="time">{time}</span>
          </p>
          <p className="comment-text-style">{comment}</p>
        </div>
      </div>
      <div className="list-item-second-container">
        <button className={likeButtonClass} type="button" onClick={onLike}>
          <img src={likeImageUrl} alt="like" className="like-image" />
          <span className="like-text">Like</span>
        </button>
        <button
          className="del-btn"
          type="button"
          data-testid="delete"
          onClick={onDel}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

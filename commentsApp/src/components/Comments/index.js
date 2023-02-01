import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
// import {customRandom} from 'nanoid'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    nameInput: '',
    commentInput: '',
  }

  onLikeComment = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.map(each => {
      if (each.id === id) {
        return {...each, isLiked: !each.isLiked}
      }
      return each
    })
    this.setState({
      commentsList: newCommentsList,
    })
  }

  onNameChange = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onCommentChange = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onDelComment = id => {
    const {commentsList} = this.state

    const newCommentsList = commentsList.filter(each => each.id !== id)

    this.setState({
      commentsList: newCommentsList,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const date = new Date()
    const {nameInput, commentInput} = this.state
    if (nameInput !== '' && commentInput !== '') {
      const initialColorClass = `initial-style ${
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ]
      }`

      const newComment = {
        id: uuidv4(),
        name: nameInput,
        comment: commentInput,
        isLiked: false,
        time: formatDistanceToNow(date),
        initialColor: initialColorClass,
      }

      this.setState(prev => ({
        commentsList: [...prev.commentsList, newComment],
        nameInput: '',
        commentInput: '',
      }))
    }
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    const counter = commentsList.length
    console.log(counter)

    return (
      <div className="bg-container">
        <div className="upper-container">
          <form className="container-1" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <p className="above-input-para">
              Say something about 4.0 Technologies
            </p>
            <input
              type="text"
              placeholder="Your Name"
              className="name-input"
              value={nameInput}
              onChange={this.onNameChange}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="comment-text"
              onChange={this.onCommentChange}
              value={commentInput}
            />
            <button className="add-comment-btn" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="main-image"
            alt="comments"
          />
        </div>
        <hr className="separator-line" />
        <p className="comments-count-text">
          <span className="comments-counter">{counter}</span> Comments
        </p>
        <ul className="list-container">
          {commentsList.map(each => (
            <CommentItem
              commentsDetails={each}
              key={each.id}
              onLikeComment={this.onLikeComment}
              onDelComment={this.onDelComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

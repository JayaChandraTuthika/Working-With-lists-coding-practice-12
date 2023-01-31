import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  lastReview = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prev => ({index: prev.index - 1}))
    }
  }

  nextReview = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prev => ({index: prev.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const review = reviewsList[index]
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="bg-container">
        <div className="carousel-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="inner-carousal-container">
            <button
              className="arrow-button"
              type="button"
              onClick={this.lastReview}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrows"
                alt="left arrow"
              />
            </button>

            <div className="profile-container">
              <img src={imgUrl} className="profile-image" alt={username} />
              <p className="username">{username}</p>
              <p className="company">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              className="arrow-button"
              type="button"
              onClick={this.nextReview}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrows"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

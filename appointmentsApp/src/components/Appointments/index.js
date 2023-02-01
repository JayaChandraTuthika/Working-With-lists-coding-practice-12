import {Component} from 'react'

import './index.css'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    starredList: false,
    titleInput: '',
    dateInput: '',
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onDateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  onToggleStar = id => {
    const {appointmentsList} = this.state
    const newAppointmentsList = appointmentsList.map(each => {
      if (each.id === id) {
        return {...each, isStarred: !each.isStarred}
      }
      return each
    })
    this.setState({
      appointmentsList: newAppointmentsList,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {appointmentsList, titleInput, dateInput} = this.state
    const date1 = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
    console.log(date1)
    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: date1,
      isStarred: false,
    }

    const newAppoinmentsList = [...appointmentsList, newAppointment]

    this.setState({
      appointmentsList: newAppoinmentsList,
      titleInput: '',
      dateInput: '',
    })
  }

  toggleStarredList = () => {
    this.setState(prev => ({
      starredList: !prev.starredList,
    }))
  }

  render() {
    const {appointmentsList, starredList, titleInput, dateInput} = this.state
    console.log(appointmentsList)
    const filteredList = starredList
      ? appointmentsList.filter(each => each.isStarred === true)
      : appointmentsList

    return (
      <div className="bg-container">
        <div className="inner">
          <div className="upper-part">
            <form className="container-1" onSubmit={this.onAddAppointment}>
              <h1 className="main-heading">Add Appointment</h1>
              <label htmlFor="titleInput" className="label">
                TITLE
              </label>
              <input
                id="titleInput"
                type="text"
                className="title-input"
                onChange={this.onTitleChange}
                value={titleInput}
              />

              <label htmlFor="dateInput" className="label">
                DATE
              </label>
              <input
                id="dateInput"
                type="date"
                className="date-input"
                onChange={this.onDateChange}
                value={dateInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="main-image"
            />
          </div>
          <hr className="separator-line" />
          <div className="bottom-heading-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              className="starred-button"
              type="button"
              onClick={this.toggleStarredList}
            >
              Starred
            </button>
          </div>
          <ul className="list-container">
            {filteredList.map(each => (
              <AppointmentItem
                itemDetails={each}
                onToggleStar={this.onToggleStar}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointList: [], input: '', date: ''}

  inputChange = event => {
    this.setState({input: event.target.value})
  }

  dateChange = event => {
    const getDate = format(new Date(event.target.value), 'dd MMMM yyyy, EEEE')
    this.setState({date: getDate})
  }

  onSubmit = event => {
    event.preventDefault()
    const {input, date} = this.state
    const newAppoint = {
      id: uuidv4(),
      input,
      date,
      isActive: false,
    }
    this.setState(prevState => ({
      appointList: [...prevState.appointList, newAppoint],
      input: '',
      date: '',
    }))
  }

  onClicked = id => {
    this.setState(prevState => ({
      appointList: prevState.appointList.map(each => {
        if (id === each.id) {
          return {...each, isActive: !each.isActive}
        }
        return {each}
      }),
    }))
  }

  //   clickStared = () => {
  //     this.setState(prevState => ({isStarLike: !prevState.isStarLike}))
  //   }

  render() {
    const {appointList} = this.state
    // let finalList = ''
    // if (isStarLike === true) {
    //   finalList = appointList.filter(each => each.isActive === true)
    // } else {
    //   finalList = appointList
    // }
    // console.log(appointList)
    return (
      <div className="container">
        <div className="card-bg">
          <h1 className="comment-title">Add Appointment</h1>
          <hr className="seperator" />
          <div className="card">
            <div className="first">
              <form onSubmit={this.onSubmit}>
                <p className="title">TITLE</p>
                <input
                  type="text"
                  className="input"
                  placeholder="Title"
                  onChange={this.inputChange}
                />
                <br />
                <p className="time">TIME</p>
                <input
                  type="date"
                  className="input"
                  onChange={this.dateChange}
                />
                <br />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="second">
              <img
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
              />
            </div>
          </div>
          <div className="appoint-head">
            <h1 className="head">Appointments</h1>
            <button
              type="button"
              className="starred"
              onClick={this.clickStared}
            >
              Starred
            </button>
          </div>
          <ul className="appoints">
            {appointList.map(eachContact => (
              <AppointmentItem
                details={eachContact}
                onClicked={this.onClicked}
                key={eachContact.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

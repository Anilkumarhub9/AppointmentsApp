// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {details, onClicked} = props
  const {id, input, date, isActive} = details

  const onClick = () => {
    onClicked(id)
  }

  const isLiked = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list">
      <div className="input-star">
        <p className="input-name">{input}</p>
        <img className="star" src={isLiked} onClick={onClick} alt="star" />
      </div>
      <p className="date">{date}</p>
    </li>
  )
}
export default AppointmentItem

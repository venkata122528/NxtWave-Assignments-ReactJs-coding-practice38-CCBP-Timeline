// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachCardData} = props
  const {courseTitle, description, duration, tagsList} = eachCardData

  return (
    <div>
      <div className="titleDurationContainer">
        <h1>{courseTitle}</h1>
        <div className="durationContainer">
          <AiFillClockCircle className="logo" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {tagsList.map(eachTag => (
        <p className="list">{eachTag.name}</p>
      ))}
    </div>
  )
}

export default CourseTimelineCard

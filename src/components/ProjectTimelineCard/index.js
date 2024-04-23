// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachCardData} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = eachCardData

  return (
    <div>
      <img src={imageUrl} className="image" alt="project" />
      <div className="titleDurationContainer">
        <h1>{projectTitle}</h1>
        <div className="timerContainer">
          <AiFillCalendar className="logo" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard

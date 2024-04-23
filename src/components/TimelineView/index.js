// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="mainContainer">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachCardData => {
            if (eachCardData.categoryId === 'PROJECT') {
              return <ProjectTimelineCard eachCardData={eachCardData} />
            }
            return <CourseTimelineCard eachCardData={eachCardData} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView

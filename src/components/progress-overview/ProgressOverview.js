import WeekDisplay from './week-display/WeekDisplay'

import style from './ProgressOverview.module.css'

export default function ProgressOverview(props) {
  return (
    <div className={style.container}>
      <WeekDisplay totalReps={props.totalReps} data={props.data} />
    </div>
  )
}

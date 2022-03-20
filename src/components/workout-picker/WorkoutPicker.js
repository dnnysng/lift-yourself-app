import { Container } from '@mantine/core'

import WorkoutCard from './WorkoutCard'

import PullupImage from '../../assets/images/pullup.jpeg'
import SquatImage from '../../assets/images/squat.jpeg'
import PushupImage from '../../assets/images/push.jpeg'
import HingeImage from '../../assets/images/hinge.jpeg'

import style from './WorkoutPicker.module.css'

export default function workoutPicker({ setWorkoutType }) {
  return (
    <Container className={style.container}>
      <WorkoutCard image={PushupImage} setWorkoutType={setWorkoutType} type="pushup" label="Push" />
      <WorkoutCard image={SquatImage} setWorkoutType={setWorkoutType} type="squat" label="Squat" />
      <WorkoutCard image={PullupImage} setWorkoutType={setWorkoutType} type="pullup" label="Pull" />
      <WorkoutCard image={HingeImage} setWorkoutType={setWorkoutType} type="hinge" label="Hinge" />
    </Container>
  )
}

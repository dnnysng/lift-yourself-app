import { useEffect, useState } from 'react'
import { MantineProvider } from '@mantine/core'

import Header from './components/header/Header'
import ProgressOverview from './components/progress-overview/ProgressOverview'
import WorkoutPicker from './components/workout-picker/WorkoutPicker'
import WorkoutDetail from './components/workout-detail/WorkoutDetail'

import style from './App.module.css'

export default function App() {

  /** states */
  const [data, setData] = useState({ pullup: [], squat: [], pushup: [], hinge: [] });
  const [workoutType, setWorkoutType] = useState("");
  const [totalReps, setTotalReps] = useState(0);

  /** pull data from local storage */
  useEffect(() => {
    const rawData = localStorage.getItem("data");
    if (rawData) setData(JSON.parse(rawData))
  }, [])

  /** if data changes, update the local storage */
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  /** when data is updated, recalculate totals */
  useEffect(() => {
    let workouts = ["pushup", "pullup", "squat", "hinge"]
    let total = workouts.map(workout => {
      return data[workout].length > 0 ? data[workout].map(day => day.sets.reduce((a, b) => a + b)).reduce((a, b) => a + b) : 0
    })
    setTotalReps(total.reduce((a, b) => a + b))
  }, [data])

  return (
    <>
      <MantineProvider
        theme={{
          primaryColor: 'violet',
          colorScheme: 'light',
          fontFamily: 'sans-serif',
          headings: {
            fontFamily: 'Roboto, sans-serif'
          }
        }}>
        <Header />
        <ProgressOverview totalReps={totalReps} data={data} />
        <div className={style.container}>
          {workoutType === "" ?
            <WorkoutPicker setWorkoutType={setWorkoutType} /> :
            <WorkoutDetail workoutType={workoutType} setWorkoutType={setWorkoutType} data={data} setData={setData} />
          }
        </div>
      </MantineProvider>
    </>
  );
}
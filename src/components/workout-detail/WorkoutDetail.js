import { Button, Title, TextInput } from '@mantine/core'
import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'

import style from './WorkoutDetail.module.css'

export default function WorkoutDetail({ workoutType, setWorkoutType, data, setData }) {

  const todaysDate = dayjs().format('M/D/YY')

  const [currentSets, setCurrentSets] = useState([])

  function handleAddSet() {
    setCurrentSets((prevState) => [...prevState, null])
  }

  function handleRemoveSet() {
    setCurrentSets(prevState => prevState.filter((cS, index) => index !== currentSets.length - 1));
  }

  function handleChange(e, index) {
    const updatedSets = currentSets.map((currentSet, i) => index === i ? Number(e.target.value) : currentSet);
    setCurrentSets(updatedSets);
  }

  function handleCompleteWorkout(workout) {
    if (currentSets[currentSets.length - 1] === null) {
      return alert("Hey! Enter your reps first!")
    } else {
      setData({
        ...data,
        [workout]: [
          ...data[workout],
          {
            date: todaysDate,
            sets: currentSets.filter(Boolean)
          }
        ]
      })
      setWorkoutType("")
    }
  }

  // function handleClearWorkoutData(workout) {
  //   const updatedData = { ...data, [workout]: [] };
  //   setData(updatedData);
  // }

  function handleGoBack() {
    setWorkoutType("")
  }

  function handleWorkoutLabel(type) {
    switch (type) {
      case 'pushup':
        return 'push workout'
      case 'pullup':
        return 'pull workout'
      case 'squat':
        return 'squat workout'
      case 'hinge':
        return 'hinge workout'
      default:
        console.log(`What kind of workout is ${type}???`)
    }
  }

  return (
    <div className={style.container}>
      <Title className={style.title}>{handleWorkoutLabel(workoutType)}</Title>
      {currentSets.map((cS, index) =>
        <TextInput
          key={index}
          id={`Set${index + 1}`}
          name={`Set${index + 1}`}
          value={cS || ""}
          onChange={(e) => handleChange(e, index)}
          placeholder={`Set ${index + 1}`}
          className={style.input}
          styles={{ input: { textAlign: 'center' } }}
          size='lg'
        />
      )}
      <div className={style.buttonsWrapper}>
        <Button
          fullWidth
          color="dark"
          leftIcon={<MinusIcon />}
          onClick={handleRemoveSet}
          label="Remove Set"
          disabled={currentSets.length === 0}
        >
          Remove Set
        </Button>
        <Button
          fullWidth
          color="dark"
          leftIcon={<PlusIcon />}
          onClick={handleAddSet}
          label="Add Set"
        >
          Add Set
        </Button>
      </div>
      {currentSets.length > 0 &&
        <Button
          fullWidth
          onClick={() => handleCompleteWorkout(workoutType)}
          label="Complete Sets"
        >
          Complete Sets
        </Button>
      }
      <Button
        fullWidth
        color="gray"
        onClick={handleGoBack}
        label="Go Back"
      >
        Go Back
      </Button>
    </div>
  )
}
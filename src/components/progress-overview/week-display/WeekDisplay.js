import { ActionIcon } from '@mantine/core'
import { useState, useEffect } from 'react'

import Day from './Day'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'

import style from './WeekDisplay.module.css'

export default function Week({ data }) {

  const [workedDays, setWorkedDays] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const allDays = data.pullup.slice(-7).map(day => day.date).concat(
      data.squat.slice(-7),
      data.pushup.slice(-7),
      data.hinge.slice(-7)
    ).map(day => day.date)

    setWorkedDays([...new Set(allDays)])
  }, [data])

  return (
    <div className={style.container} >
      <ActionIcon
        className={style.arrowWrapper}
        variant="outline"
        size="lg"
        onClick={() => setCount(prev => prev + 1)}
      >
        <CaretLeftIcon className={style.arrow} />
      </ActionIcon>
      <Day day={count + 6} workedDays={workedDays} />
      <Day day={count + 5} workedDays={workedDays} />
      <Day day={count + 4} workedDays={workedDays} />
      <Day day={count + 3} workedDays={workedDays} />
      <Day day={count + 2} workedDays={workedDays} />
      <Day day={count + 1} workedDays={workedDays} />
      <Day day={count + 0} workedDays={workedDays} />
      <ActionIcon
        className={style.arrowWrapper}
        variant="outline"
        size="lg"
        onClick={() => setCount(prev => prev - 1)}
        disabled={count === 0}
      >
        <CaretRightIcon className={style.arrow} />
      </ActionIcon>
    </div>
  )
}
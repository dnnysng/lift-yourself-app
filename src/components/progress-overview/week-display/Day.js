import { Text, ThemeIcon } from '@mantine/core'
import dayjs from 'dayjs'

import { StarFilledIcon } from '@radix-ui/react-icons'

import style from './Day.module.css'

export default function Day({ day, workedDays }) {

  function handleWorked(num) {
    return workedDays.includes(dayjs().subtract(num, 'day').format('M/D/YY'))
  }

  function handleDateDisplay(num) {
    return dayjs().subtract(num, 'day').format('M/DD')
  }

  function handleDayDisplay(num) {
    return dayjs().subtract(num, 'day').format('dd')
  }

  return (
    <div className={style.container}>
      <Text size="sm">{handleDayDisplay(day)}</Text>
      <Text size="xs">{handleDateDisplay(day)}</Text>

      {handleWorked(day) === true ?
        <ThemeIcon radius="xl" color='primary'>
          <StarFilledIcon className={'icon'} />
        </ThemeIcon> :
        <ThemeIcon radius="xl" size="md" color='gray'>
        </ThemeIcon>
      }

    </div>
  )
}

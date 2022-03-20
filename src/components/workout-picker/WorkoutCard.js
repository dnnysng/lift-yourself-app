import { Card, Image, Button } from '@mantine/core';
import { PlusIcon } from '@radix-ui/react-icons';

import style from './WorkoutCard.module.css'

export default function WorkoutCard({ image, setWorkoutType, type, label }) {
  return (
    <Card className={style.container} shadow="sm">
      <Card.Section>
        <Image src={image} width={'100%'} alt="Norway" />
      </Card.Section>

      <Button
        fullWidth
        color="dark"
        style={{ marginTop: 20 }}
        onClick={() => setWorkoutType(type)}
        leftIcon={<PlusIcon />}
      >
        {`${label}`}
      </Button>
    </Card>
  )
}

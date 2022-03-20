import { Text } from '@mantine/core'

import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.container}>
      <Text weight="bold" transform="uppercase" size="xl" color="dark">lift yourself</Text>
    </header>
  )
}

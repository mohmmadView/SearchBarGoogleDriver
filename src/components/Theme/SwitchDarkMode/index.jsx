import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React from 'react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

export default function App() {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(false)
  isSelected ? setTheme('dark') : setTheme('light')
  return (
    <Switch
      onValueChange={setIsSelected}
      isSelected={isSelected}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
  )
}

import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { FC, useState } from 'react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'
const App: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = useState<boolean>(false)
  isSelected ? setTheme('dark') : setTheme('light')
  return (
    <Switch
      onValueChange={setIsSelected}
      isSelected={isSelected}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  )
}
export default App

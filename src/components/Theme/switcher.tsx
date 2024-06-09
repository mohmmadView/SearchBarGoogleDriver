'use client'
import { useState } from 'react'
import IconSwitch from './SwitchDarkMode/index.jsx'
export const ThemeSwitcher = () => {
  let themeSwitch = useState<Boolean>(false)

  return (
    <div>
      <IconSwitch />
      {/* <Button onClick={() => setTheme('light')}>Light Mode</Button>
      <Button onClick={() => setTheme('dark')}>Dark Mode</Button> */}
    </div>
  )
}

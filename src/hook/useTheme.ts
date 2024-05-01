import { useEffect, useState } from 'react'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'

type useThemeReturn = [string, (e: ChangeEvent) => void]

const THEME_STORAGE_KEY = 'selected_theme'

export const useTheme = (initialTheme: Theme): useThemeReturn => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
  const [theme, setTheme] = useState<Theme>(storedTheme || initialTheme)

  const handleChange = (e: ChangeEvent) => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, handleChange]
}

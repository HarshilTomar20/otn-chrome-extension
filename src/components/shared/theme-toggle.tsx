interface ToggleThemeProps {
    toggleTheme: any;
    isDarkTheme: any;
}

function ThemeToggle({toggleTheme, isDarkTheme}: ToggleThemeProps) {
  return (
    <button
          className="ml-auto pr-6"
          onClick={toggleTheme}
        >
          {isDarkTheme ? <img src='https://www.oneturf.news/_next/static/media/darkModeNew.e23d813d.svg' alt='dark-mode'/> : <img src='https://www.oneturf.news/_next/static/media/lightModeNew.fd544669.svg' alt='light-mode'/>}
    </button>
  )
}

export default ThemeToggle
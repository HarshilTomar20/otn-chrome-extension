interface ToggleThemeProps {
  HandleThemeSwitch: () => void;
  theme: string;  // Changed 'any' to 'string' for better type safety
}

function ThemeToggle({ HandleThemeSwitch, theme }: ToggleThemeProps) {
  return (
    <button
      className="ml-auto pr-6"
      onClick={HandleThemeSwitch}
    >
      {theme === "light" ? (
        <img
          src="https://www.oneturf.news/_next/static/media/darkModeNew.e23d813d.svg"
          alt="dark-mode"
        />
      ) : (
        <img
          src="https://www.oneturf.news/_next/static/media/lightModeNew.fd544669.svg"
          alt="light-mode"
        />
      )}
    </button>
  );
}

export default ThemeToggle;


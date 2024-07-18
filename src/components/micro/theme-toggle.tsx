interface ToggleProps {
    goToPreviousMatch: any;
    matches: any;
    goToNextMatch: any;
}

export default function ThemeToggle({goToPreviousMatch, matches, goToNextMatch}: ToggleProps) {
  return (
    <div className='flex justify-between m-4'>
          <button 
            className="px-4 py-2 rounded-md bg-blue-500 text-white"
            onClick={goToPreviousMatch}
            disabled={matches.length === 0}
          >
            Previous
          </button>
          <button 
            className="px-4 py-2 rounded-md bg-blue-500 text-white"
            onClick={goToNextMatch}
            disabled={matches.length === 0}
          >
            Next
          </button>
      </div>
  )
}


interface ToggleProps {
    goToPreviousMatch: any;
    matches: any;
    goToNextMatch: any;
}

export default function Scroller({goToPreviousMatch, matches, goToNextMatch}: ToggleProps) {
  return (
    <div className='flex justify-between m-4'>
          <button 
            className="px-4 py-2 rounded-md bg-indigo-900 text-white"
            onClick={goToPreviousMatch}
            disabled={matches.length === 0}
          >
            &larr;
          </button>
          <button 
            className="px-4 py-2 rounded-md bg-indigo-900 text-white"
            onClick={goToNextMatch}
            disabled={matches.length === 0}
          >
            &rarr;
          </button>
      </div>
  )
}


import { useEffect, useState } from 'react';
import './App.css';
import { Match } from './types/common';
import { getMatchData } from './utils/getMatchData';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const Bat="Yet to Bat";
  const url = 'https://match-management.api.oneturf.news/api/fetchMiniScorecardData';

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchData(url);
      setMatches(data);
      console.log(matches);
    };

    fetchData();
  }, [url]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const goToNextMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const goToPreviousMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  const currentMatch = matches[currentMatchIndex] || {};
  console.log(currentMatch);

  return (
    <div className={`container w-[500px] ${isDarkTheme ? 'bg-zinc-900 text-white' : 'bg-neutral-100 text-black'}`}>
      <div className='flex bg-indigo-900'>
        <img className='m-2' src='https://www.oneturf.news/football/_next/static/media/logoDark.a6c53fff.svg' alt="Logo"/>
        <button
          className="ml-auto mr-2 mt-3 px-4 py-2 rounded-md bg-blue-500 text-white mb-4 text-xs"
          onClick={toggleTheme}
        >
          {isDarkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className='border-black w-11/12 rounded-lg text-center m-4 bg-white p-4'>
        <div className='flex'>
          <text className='text-red-600 ml-2'>* Live</text>
          <text className='text-gray-500 ml-2'>* {currentMatch.sSubtitle}</text>
          <text className='text-gray-500 ml-2'>* {currentMatch?.oSeries?.sTitle}</text>
        </div>
        <div>
          <div className='flex mx-4 mt-2'>
              <span className='font-bold mr-auto'>{currentMatch.oTeamScoreA?.oTeam?.sAbbr}</span>
              <span className='text-lg'>{currentMatch.oTeamScoreA?.sScoresFull}</span>
          </div>
          <div className='flex mx-4 mt-2'>
            <span className='font-bold mr-auto'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
            <span className='text-lg'>{Bat}</span>
          </div>
        </div>
        <text className='text-orange-600'>{currentMatch.oToss?.sText}</text>
        <div className='w-full p-4 bg-stone-50 text-left text-gray-700'>Standings &rarr;</div>
      </div>

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
    </div>
  );
}

export default App;

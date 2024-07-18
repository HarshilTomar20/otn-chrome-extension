import { useEffect, useState } from 'react';
import './App.css';
import { Match } from './types/common';
import { getMatchData } from './utils/getMatchData';
import BrandLogo from './components/shared/brand-logo';
import Scroller from './components/micro/card-scroll';
import ThemeToggle from './components/shared/theme-toggle';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [theme, setTheme]= useState("light");
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

  useEffect(()=> {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const HandleThemeSwitch= ()=> {
    setTheme( theme === "dark" ? "light" : "dark")
  }

  const goToNextMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const goToPreviousMatch = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  const currentMatch = matches[currentMatchIndex] || {};

  return (
    <div className='container w-[500px] bg-neutral-100 text-black dark:bg-zinc-900 dark:text-white'>
      <div className='flex bg-indigo-900 dark:bg-zinc-900 py-2'>
        <BrandLogo/>
        <ThemeToggle HandleThemeSwitch={HandleThemeSwitch} theme={theme} />;
      </div>
      <div className='border-black w-11/12 rounded-lg text-center m-4 bg-white dark:bg-zinc-800 px-4 pt-4'>
        <div className='flex'>
          <text className='text-red-600 ml-2'>* Live</text>
          <text className='text-gray-500 ml-2'>* {currentMatch.sSubtitle}</text>
          <text className='text-gray-500 ml-2'>* {currentMatch?.oSeries?.sTitle}</text>
        </div>
        <div>
          <div className='flex mx-4 mt-2 text-black'>
              <span className='font-bold mr-auto'>{currentMatch.oTeamScoreA?.oTeam?.sAbbr}</span>
              <span className='text-lg'>{currentMatch.oTeamScoreA?.sScoresFull}</span>
          </div>
          <div className='flex mx-4 mt-2 text-black'>
            <span className='font-bold mr-auto'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
            <span className='text-lg'>{Bat}</span>
          </div>
        </div>
        <text className='text-orange-600 text-left my-2'>{currentMatch.oToss?.sText}</text>
        <div className='w-full p-4 -mx-4 bg-stone-50 dark:bg-zinc-900 text-left text-gray-700'>Standings &rarr;</div>
      </div>
      <Scroller goToPreviousMatch={goToPreviousMatch} matches={matches} goToNextMatch={goToNextMatch}/>
    </div>
  );
}

export default App;

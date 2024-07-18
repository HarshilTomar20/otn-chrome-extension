import { useEffect, useState } from 'react';
import './App.css';
import { Match } from './types/common';
import { getMatchData } from './utils/getMatchData';
import BrandLogo from './components/shared/brand-logo';
import Scroller from './components/micro/card-scroll';
import ThemeToggle from './components/shared/theme-toggle';
import PoweredBy from './components/shared/powered-by';
import TeamScores from './components/MatchCard/team-scores';

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
      console.log(data);
    };

    // Fetch data immediately on mount
    fetchData();

    // Set interval to fetch data every 3 seconds
    const interval = setInterval(fetchData, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
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
    <div className='container w-[500px] bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white'>
      <div className='flex bg-indigo-900 dark:bg-black py-2'>
        <BrandLogo/>
        <ThemeToggle HandleThemeSwitch={HandleThemeSwitch} theme={theme} />
      </div>
      <div className='border-black dark:border-zinc-600 w-11/12 rounded-t-lg text-center m-4 bg-white dark:bg-stone-900'>
        <div className='px-4 pt-4'>
          <div className='flex text-xs'>
            <text className='text-red-600 ml-2'>🔴 Live</text>
            <text className='text-gray-500 ml-2'>⚪️ {currentMatch.sSubtitle}</text>
            <text className='text-gray-500 ml-2'>⚪️ {currentMatch?.oSeries?.sTitle}</text>
          </div>
          <TeamScores currentMatch={currentMatch} Bat={Bat}/>
          <div className='my-4'>
            <text className='text-orange-600 text-left'>{currentMatch.oToss?.sText}</text>
          </div>
        </div>
        <div className='w-full p-4 rounded-b-lg bg-stone-50 dark:bg-stone-800 rounded text-left text-gray-700 dark:text-white'>Standings &rarr;</div>
      </div>
      <Scroller goToPreviousMatch={goToPreviousMatch} matches={matches} goToNextMatch={goToNextMatch}/>
      <div className='ml-40 py-4'>
        <PoweredBy/>
      </div>
    </div>
  );
}

export default App;

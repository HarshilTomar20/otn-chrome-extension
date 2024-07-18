interface TeamScoresProps {
    currentMatch: any;
    Bat: any;
  }
  
  export default function TeamScores({ currentMatch, Bat }: TeamScoresProps) {
    return (
      <div>
        <div className='flex mx-4 mt-2 text-lg text-black dark:text-white'>
          <span className='font-bold mr-auto'>{currentMatch.oTeamScoreA?.oTeam?.sAbbr} 🏏</span>
          <span className='text-lg'>{currentMatch.oTeamScoreA?.sScoresFull || Bat}</span>
        </div>
        <div className='flex mx-4 text-lg text-black dark:text-white'>
          <span className='font-bold mr-auto'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
          <span className='text-lg'>
            {currentMatch.oTeamScoreB?.sScoresFull || Bat}
          </span>
        </div>
      </div>
    );
  }
  
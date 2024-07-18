import { S3_PREFIX } from "../../utils/contants";
import FlagTeam from "../../assets/team-placeholder.svg"

interface TeamScoresProps {
    currentMatch: any;
    Bat: any;
  }
  
  export default function TeamScores({ currentMatch, Bat }: TeamScoresProps) {
    return (
      <div>
        <div className='flex mx-4 mt-2 text-lg text-black dark:text-white'>
          <div className="mr-auto flex">
            <img 
              className="h-5 mr-2 mt-1"
              src={currentMatch.oTeamScoreA?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreA?.oTeam?.oImg?.sUrl}` : 
              FlagTeam}
            />
            <span className='font-bold '>{currentMatch.oTeamScoreA?.oTeam?.sAbbr} 🏏</span>
          </div>
          <span className='text-lg'>{currentMatch.oTeamScoreA?.sScoresFull || Bat}</span>
        </div>

        <div className='flex mt-1 mx-4 text-lg text-black dark:text-white'>
          <div className="mr-auto flex">
            <img 
              className="h-5 mr-2 mt-1"
              src={currentMatch.oTeamScoreB?.oTeam?.oImg?.sUrl ? `${S3_PREFIX}${currentMatch?.oTeamScoreB?.oTeam?.oImg?.sUrl}` : 
              FlagTeam}
            />
            <span className='font-bold'>{currentMatch.oTeamScoreB?.oTeam?.sAbbr}</span>
          </div>
          <span className='text-lg'>{currentMatch.oTeamScoreB?.sScoresFull || Bat}</span>
        </div>
      </div>
    );
  }
  
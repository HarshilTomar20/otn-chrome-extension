export interface Team {
  teamId: string;
  name: string;
  logo: string;
  abbr: string;
  score: string; // e.g., "39/1"
  overs: string; // e.g., "5"
}

export interface Venue {
  venueId: string;
  name: string;
  location: string;
}

export interface Match {
  _id: string;
  sTitle: string;
  sSubtitle: any;
  oTeamScoreA: any;
  oTeamScoreB: any;
  sLiveGameStatusStr: any;
  oToss: any;
  oSeries: {
    sTitle: any;
  }
  matchKey: string;
  startDate: string;
  endDate: string;
  statusStr: string;
  liveGameStatusStr: string;
  title: string; // e.g., "Match 18"
  subtitle: string; // e.g., "Lanka Premier League"
  teams: {
    batting: Team;
    fielding: Team;
  };
  venue: Venue;
  toss: {
    text: string; // e.g., "DS won the toss & elected to bowl"
    winnerTeamId: string;
    decision: string; // e.g., "fielding"
  };
}


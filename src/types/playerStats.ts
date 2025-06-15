export interface PlayerStatsResponse {
  total: number;
  players: PlayerStats[];
}

export interface PlayerStats {
  playerRanking: number;
  player: {
    code: string;
    name: string;
    age: number;
    imageUrl: string;
    team: {
      code: string;
      tvCodes: string;
      name: string;
      imageUrl: string;
    };
  };
  gamesPlayed: number;
  gamesStarted: number;
  minutesPlayed: number;
  pointsScored: number;
  twoPointersMade: number;
  twoPointersAttempted: number;
  twoPointersPercentage: string;
  threePointersMade: number;
  threePointersAttempted: number;
  threePointersPercentage: string;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  freeThrowsPercentage: string;
  offensiveRebounds: number;
  defensiveRebounds: number;
  totalRebounds: number;
  assists: number;
  steals: number;
  turnovers: number;
  blocks: number;
  blocksAgainst: number;
  foulsCommited: number;
  foulsDrawn: number;
  pir: number;
}

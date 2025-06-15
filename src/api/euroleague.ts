import { EUL_API_BASE, USER_AGENT } from "../config.js";
import { ClubResponse } from "../types/club.js";
import { PlayerStatsResponse } from "../types/playerStats.js";

export async function makeEuroleagueRequest<T>(url: string): Promise<T | null> {
  const headers = {
    "User-Agent": USER_AGENT,
    Accept: "application/json",
  };
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error making EuroLeague API request:", error);
    return null;
  }
}

export function formatClub(club: ClubResponse): string {
  return [
    `Team: ${club.name || "Unknown"}`,
    `Alias: ${club.alias || "Unknown"}`,
    `City: ${club.city || "Unknown"}`,
    `Country: ${club.country?.name || "Unknown"}`,
    `Arena: ${club.venue?.name || "Unknown"}`,
    `Capacity: ${club.venue?.capacity ?? "Unknown"}`,
    `Website: ${club.website || "N/A"}`,
    `President: ${club.president || "N/A"}`,
    `Phone: ${club.phone || "N/A"}`,
    `Crest: ${club.images?.crest || "N/A"}`,
    "---",
  ].join("\n");
}

export function formatAdvancedPlayerStats(playerStats: PlayerStatsResponse): string {
  return [
    `Total Players: ${playerStats.total}`,
    "---",
    ...playerStats.players.map((player) => {
      return [
        `Ranking: ${player.playerRanking}`,
        `Name: ${player.player.name} (${player.player.code})`,
        `Age: ${player.player.age}`,
        `Valuation: ${player.pir}`,
        `Assists: ${player.assists}`,
        `Team: ${player.player.team.name} (${player.player.team.code})`,
        `Games Played: ${player.gamesPlayed}`,
        `Minutes Played: ${player.minutesPlayed}`,
        "---",
      ].join("\n");
    }),
  ].join("\n");
}




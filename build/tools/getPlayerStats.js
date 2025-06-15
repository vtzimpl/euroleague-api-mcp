import { z } from "zod";
import { makeEuroleagueRequest, formatAdvancedPlayerStats } from "../api/euroleague.js";
export function registerGetPlayerStatsTool(server) {
    server.tool("get-player-stats", "Get advanced player statistics for a competition and statistic type", {
        competition: z.string().describe("Competition code (e.g. E, Euroleague or U for EuroCup)"),
        statistic: z.string().describe("Statistic type code (e.g. Assistances, Assistances or Valuation, Valuation, etc.)"),
    }, async ({ competition, statistic }) => {
        const querytext = `statisticSortMode=PerGame&statistic=${statistic}&sortDirection=Descending&offset=0&limit=10`;
        const competitionCode = competition.toUpperCase();
        const advancedPlayerStatsInfoUrl = `https://api-live.euroleague.net/v3/competitions/${competitionCode}/statistics/players/traditional?${querytext}`;
        const stats = await makeEuroleagueRequest(advancedPlayerStatsInfoUrl);
        if (!stats) {
            return {
                content: [
                    {
                        type: "text",
                        text: "Failed to retrieve player statistics",
                    },
                ],
            };
        }
        return {
            content: [
                {
                    type: "text",
                    text: formatAdvancedPlayerStats(stats),
                },
            ],
        };
    });
}

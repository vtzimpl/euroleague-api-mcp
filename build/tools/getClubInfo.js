import { z } from "zod";
import { makeEuroleagueRequest, formatClub } from "../api/euroleague.js";
export function registerGetClubInfoTool(server) {
    server.tool("get-club-info", "Get club information", {
        club: z.string().length(3).describe("Three-letter club code (e.g. BAR, RMD)"),
    }, async ({ club }) => {
        const clubCode = club.toUpperCase();
        const clubInfoUrl = `https://api-live.euroleague.net/v3/clubs/${clubCode}`;
        const clubData = await makeEuroleagueRequest(clubInfoUrl);
        if (!clubData) {
            return {
                content: [
                    {
                        type: "text",
                        text: "Failed to retrieve club information",
                    },
                ],
            };
        }
        return {
            content: [
                {
                    type: "text",
                    text: formatClub(clubData),
                },
            ],
        };
    });
}

#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerGetClubInfoTool } from "./tools/getClubInfo.js";
import { registerGetPlayerStatsTool } from "./tools/getPlayerStats.js";

// Create server instance
const server = new McpServer({
  name: "euroleague-api-mcp",
  version: "1.0.0",
});

// Register tools
registerGetClubInfoTool(server);
registerGetPlayerStatsTool(server);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Euroleague MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
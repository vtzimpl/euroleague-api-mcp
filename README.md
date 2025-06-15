# euroleague-live-mcp

This is an MCP (Model Context Protocol) server for Euroleague and Eurocup basketball data.

## Features
- Get club information from the Euroleague API
- Get advanced player statistics for a competition and statistic type
- Easily extendable for more endpoints/tools

## Requirements
- Node.js (v18+ recommended)
- npm

## Installation
Clone the repository and install dependencies:
```bash
npm install
```

## Build
Compile the TypeScript code:
```bash
npm run build
```

## Run (Locally)
Start the MCP server:
```bash
npm start
```
Or directly:
```bash
node build/index.js
```

## Run with npx (Locally)
After building, you can also run with npx:
```bash
npx --package=./ euroleague-live-mcp
```

## MCP Server Configuration (for Claude or other agents)
Create a `.vscode/mcp.json` file in your project root with the following content:
```json
{
  "servers": {
    "euroleague-live-mcp": {
      "command": "node",
      "args": [
        "${workspaceFolder}/build/index.js"
      ]
    }
  }
}

i.e. for Claude in Windows
{
  "mcpServers": {
    "euroleague-api-mcp": {
      "command": "node",
      "args": ["C:\\euroleague-api-mcp\\build\\index.js"]
    }
  }
}

Feel free to extend this server with more tools and endpoints!

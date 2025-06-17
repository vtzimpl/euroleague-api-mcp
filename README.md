# euroleague-live-mcp

This is an MCP (Model Context Protocol) server for Euroleague and Eurocup basketball data.

## Features
- Get club information from the Euroleague API
- Get advanced player statistics for a competition and statistic type
- Easily extendable for more endpoints/tools

## Requirements
- Node.js (v18+ recommended)
- npm

## Installation (from npm)
Install globally:
```bash
npm install -g euroleague-live-mcp
```
Or use with npx (no install required):
```bash
npx euroleague-live-mcp
```

## Installation (Locally from source)
Clone the repository and install dependencies:
```bash
npm install
```
Compile the TypeScript code:
```bash
npm run build
```

## Run (Locally from source)
Start the MCP server:
```bash
npm start
```
Or directly:
```bash
node build/index.js
```

## Use in MCP Server Configuration (for Claude or other agents)
Example configuration:
```json
{
  "mcpServers": {
    "euroleague-live-mcp": {
      "command": "npx",
      "args": ["-y", "euroleague-live-mcp@latest"]
    }
  }
}
```

Feel free to extend this server with more tools and endpoints!

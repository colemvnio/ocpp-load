# OCPP Load Simulations ⚡️

This project provides tools to simulate OCPP client load against a WebSocket server.

[[TOC]]

## 🛠️ Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

## ⚙️ Configuration

Configuration is handled via environment variables. Copy the template file:

```bash
cp template.env .env
```

Then edit `.env`:

*   `TARGET_WS_URL`: The WebSocket URL of the OCPP server to target.
    *   Defaults to `ws://localhost:8080` if not set.
    *   Example: `TARGET_WS_URL=ws://my-ocpp-server.com:9000`
*   `WS_PORT`: The port the local test WebSocket server (`server.ts`) should listen on.
    *   Defaults to `8080` if not set.
    *   Example: `WS_PORT=9090`
*   `OCPP_VERSION`: The OCPP version to simulate (determines which scenarios and message formats are used).
    *   Currently supported: `v1_6_j`
    *   Defaults to `v1_6_j` if not set.
    *   Example: `OCPP_VERSION=v1_6_j`

**! Note:** The `.env` file is ignored by git (see `.gitignore`).

## 🚀 Running the Project

### Building

Compile the TypeScript code (both the server and the Artillery processor):

```bash
npm run build
```

This creates a `dist` directory with the compiled JavaScript.

### Running the Local Test Server

> The local test server is a generic Websocket that will print events it receives.

This project includes a basic WebSocket server (`server.ts`) for testing purposes.

*   **For development (uses ts-node, auto-restarts on changes often):**
    ```bash
    npm run dev:server
    ```
*   **For production/stable run (requires building first):**
    ```bash
    npm run build
    npm start
    ```

The server will start on the port defined by `WS_PORT` (default 8080).

### Running the Load Test

Set the desired `OCPP_VERSION` in your environment or `.env` file.

Execute the Artillery load test:

```bash
npm run run:loadtest
```

This command will:
1.  Build the TypeScript processor code (`dist/processor`).
2.  Run Artillery using the configuration in `scenarios/${OCPP_VERSION:-v1_6_j}.yml`.
3.  Save the results to `report.json`.

**🎯 Targeting a Server:**

*   **Scenario 1: Target the local `server.ts`**
    1.  Make sure the `WS_PORT` in your `.env` (or the default `8080`) is correct.
    2.  Ensure `TARGET_WS_URL` is **not set** in your environment OR is set to `ws://localhost:<WS_PORT>` (e.g., `ws://localhost:8080`).
    3.  Start the local server: `npm run dev:server` or `npm start`.
    4.  In another terminal, run the load test: `npm run run:loadtest`.

*   **Scenario 2: Target an External OCPP Server**
    1.  Set the `TARGET_WS_URL` environment variable to your external server's address:
        ```bash
        # Example for one command
        TARGET_WS_URL=ws://your-external-ocpp-server.com:1234 npm run run:loadtest

        # Or export it for the session
        export TARGET_WS_URL=ws://your-external-ocpp-server.com:1234
        npm run run:loadtest
        ```
    2.  You don't need to run the local `server.ts` in this case.
    3.  Run the load test: `npm run run:loadtest`
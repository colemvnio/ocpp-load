"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const port = parseInt(process.env.WS_PORT || '8080', 10);
const wss = new ws_1.WebSocketServer({ port });
console.log(`WebSocket server starting on port ${port}...`);
wss.on('connection', (ws) => {
    console.log('Client connected.');
    ws.on('message', (message, isBinary) => {
        const messageString = message.toString();
        console.log('Received: %s', messageString);
        try {
            const parsedMessage = JSON.parse(messageString);
            const response = `Echo: ${parsedMessage.action || messageString}`;
            ws.send(response);
            console.log('Sent: %s', response);
        }
        catch (error) {
            const response = `Echo: ${messageString}`;
            ws.send(response);
            console.log('Sent: %s', response);
        }
    });
    ws.on('close', () => {
        console.log('Client disconnected.');
    });
    ws.on('error', (error) => {
        console.error('WebSocket Error: %s', error.message);
    });
    ws.send('Welcome to the OCPP Test WebSocket server!');
});
wss.on('listening', () => {
    console.log(`WebSocket server is running on ws://localhost:${port}`);
});
wss.on('error', (error) => {
    console.error(`WebSocket Server Error: ${error.message}`);
});
//# sourceMappingURL=server.js.map
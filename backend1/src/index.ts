// ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });


const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
// on - incoming connection, send - outgoing connection
// connection - event name (can be more like "disconnect", "error", etc.)
// function - event handler
// ws - WebSocket instance

  gameManager.addUser(ws);
  ws.on("disconnect", () => gameManager.removeUser(ws));
});
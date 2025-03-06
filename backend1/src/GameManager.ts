import WebSocket from "ws";
import { INIT_GAME } from "./messages";

// User, Game

export class GameManager {
    private games: Game[];
    private pendingUser: WebSocket;
    private users: WebSocket[];
    

    constructor() {
        this.games = [];
    }

    addUser(socket: WebSocket)  {
        this.users.push(socket);
        this.addHandler(socket)

    }

    removeUser(socket: WebSocket) {
        this.users = this.users.filter(user => user !== socket);
        // Stop the game here because the user left
    }

    private addHandler(socket: WebSocket) {
        // should ideally be grpc
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());

            if (message.type === INIT_GAME) {
                // start a game

            } else {
                this.pendingUser = socket;
            }

        })
    }

}
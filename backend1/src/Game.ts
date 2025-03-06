
export class Game{
    private player1: WebSocket;
    private player2: WebSocket;
    private board: string; // a chess board can be represented as a string
    private moves: string[];
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = "";
        this.moves = [];
        this.startTime = new Date();
    }
}
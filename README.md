# Chess Game Application

---

## Frontend
- **Framework**: React  
- **Create Project**:  
  ```bash
  npm create vite@latest
  ```
- **Dependencies**:  
  Install Tailwind CSS and React Router DOM:  
  ```bash
  npm install tailwindcss @tailwindcss/vite
  npm install react-router-dom
  ```
- **Run Dev Server**:  
  ```bash
  npm run dev
  ```

---

## Backend
- **Runtime**: Node.js  
- **WebSocket Server**: [`ws`](https://www.npmjs.com/package/ws) library  
- **Build**:  
  ```bash
  tsc -b
  ```
- **Run**:  
  ```bash
  node dist/index.js
  ```

### Dependencies
- Install the [Chess.js](https://www.npmjs.com/package/chess.js) library to manage the game:  
  ```bash
  npm install chess.js
  ```

### Testing
To test, you can send JSON messages like:

#### Initialize Game
```json
{
  "type": "init_game"
}
```

#### Make a Move
```json
{
  "type": "move",
  "move": {
    "from": "a2",
    "to": "a3"
  }
}
```
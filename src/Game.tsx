import './Game.css';
import Board,{BoardValues} from './components/Board';
import { useState } from 'react';

interface GameProps {
    history: Array<BoardValues>;
    stepNumber: number;
    xIsNext: boolean;
}

const Game = () => {
  const [game, setGame] = useState<GameProps>({
    history:[{
      squares: Array(9).fill(null)
    }], 
    stepNumber: 0,
    xIsNext: true
  });
  
  const onClick = (stepNumber: number, index: number) : void => {
    let history = game.history.slice(0, game.stepNumber + 1);
    // sliceは元の配列のコピーを作り出す
    let squares = history[game.stepNumber].squares.slice();

    if(calculateWinner(squares) || squares[index]){
        return;
    }

    squares[index] = game.xIsNext ? 'X': 'O';
    // concatは元の配列を変更しない
    setGame({history: history.concat({squares: squares}), stepNumber: history.length, xIsNext: !game.xIsNext});
  }

  const calculateWinner = (squares: Array<string>): string | null => {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
}

const createMessage = (game: GameProps): string => {
      const winner = calculateWinner(game.history[game.stepNumber].squares);

      if(winner){
          return `Winner: ${winner}`;
      }

      return `Next player: ${game.xIsNext ? 'X': 'O'}`;
}

const jumpTo = (step: number) => {
  setGame({
    history: game.history,
    stepNumber: step,
    xIsNext: (step % 2) === 0,
  });
};

return (
   <div className="game">
    <div className="game-board">
      <Board board={{squares: game.history[game.stepNumber].squares}} stepNumber={game.stepNumber} onClick={onClick}/>
    </div>
    <div className="game-info">
          <div>{createMessage(game)}</div>
          <ol>{game.history.map((_, move) => {
            const desc = move ?
                 `Go to move #${move}` :
                 'Go to game start';
             return (
                 <li key={move}>
                   <button onClick={() => jumpTo(move)}>{desc}</button>
                 </li>
             );})}
          </ol>
    </div>
   </div>
  );
}

export default Game;
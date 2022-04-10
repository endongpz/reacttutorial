import Square from "./Square";

interface BoardProps {
    stepNumber: number;
    board: BoardValues;
    onClick: (stepNumber: number, index: number) => void
}

export interface BoardValues {
    squares: Array<string>;
}

const Board = (props: BoardProps) => {
    return (
        <div>
          <div className="board-row">
           <Square index={0} value={props.board.squares[0]} onClick={props.onClick} stepNumber={props.stepNumber} />
           <Square index={1} value={props.board.squares[1]} onClick={props.onClick} stepNumber={props.stepNumber}  />
          < Square index={2} value={props.board.squares[2]} onClick={props.onClick} stepNumber={props.stepNumber}  />
          </div>
          <div className="board-row">
           <Square index={3} value={props.board.squares[3]} onClick={props.onClick} stepNumber={props.stepNumber}  />
           <Square index={4} value={props.board.squares[4]} onClick={props.onClick} stepNumber={props.stepNumber}  />
           <Square index={5} value={props.board.squares[5]} onClick={props.onClick} stepNumber={props.stepNumber}  />
          </div>
          <div className="board-row">
           <Square index={6} value={props.board.squares[6]} onClick={props.onClick} stepNumber={props.stepNumber}  />
           <Square index={7} value={props.board.squares[7]} onClick={props.onClick} stepNumber={props.stepNumber}  />
           <Square index={8} value={props.board.squares[8]} onClick={props.onClick} stepNumber={props.stepNumber}  />
          </div>
        </div>
      );
}
 
export default Board;
import { SetStateAction } from "react";
import { setConstantValue } from "typescript";

interface SquareProps {
    stepNumber: number;
    index: number;
    value: string;
    onClick: (stepNumber: number, index: number) => void;
}

const Square = (props: SquareProps) =>{
    return (
     <button className="square"  onClick={() => {props.onClick(props.stepNumber, props.index)}}>
      {props.value}
     </button>
    );
}

export default Square;

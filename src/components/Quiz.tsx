import React from "react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctOption: number;
}

export interface QuizProps {
  quiz: QuizQuestion;
  // * method declarations
  // * method(parameter: parameterType): returnType
  onOptionClick(selectedOption: number): void;
}



const Quiz: React.FC<QuizProps> = ({
  quiz: { question, options },
  onOptionClick
}) => {
  return (
    <div>
      <p>
        <strong>{question}</strong>
      </p>
      <ul>
        <strong>Options:</strong>
        {options?.map((option, index) => {
          return (
            <li key={index} onClick={() => onOptionClick(index)}>
              {index + 1}. {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quiz;
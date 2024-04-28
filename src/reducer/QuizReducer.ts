import { quizData } from "./../data/quizData";

export type AppState = {
  quizData: {
    question: string;
    options: string[];
    correctOption: number;
  }[];
  score: number;
  currentQuestionIndex: number;
};

export const initialState: AppState = {
  quizData: quizData,
  score: 0,
  currentQuestionIndex: 0,
};

const checkAnswer = (
  selectedOption: number,
  correctOption: number
): boolean => {
  return correctOption === selectedOption;
};

const getNextQuestionIndex = (
  currentIndex: number,
  totalQuestions: number
): number => {
  return currentIndex + 1 <= totalQuestions ? currentIndex + 1 : currentIndex;
};

type AttemptedAction = {
  type: "ATTEMPTED";
  selectedOption: number;
};

type ResetAction = {
  type: "RESET";
};

type QuizAction = AttemptedAction | ResetAction;

const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case "ATTEMPTED": {
      const { quizData, score, currentQuestionIndex } = state;

      const nextQuestionIndex = getNextQuestionIndex(
        currentQuestionIndex,
        quizData.length
      );
      const updatedScore = checkAnswer(
        action.selectedOption,
        quizData[currentQuestionIndex].correctOption
      )
        ? score + 1
        : score;

      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        score: updatedScore,
      };
    }
    case "RESET":
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
      };

    default:
      return state;
  }
};

export { quizReducer };

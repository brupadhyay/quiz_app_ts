import "./App.css";

import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Quiz, { QuizProps } from "./components/Quiz";
import Score, { ScoreProps } from "./components/Score";
import { initialState, quizReducer } from "./reducer/QuizReducer";
import { useTheme } from "./context/ThemeContext";

// ex - 01: header component with prop types

type MyComponentProps = {
  prop1: string;
  prop2: number;
  prop3: boolean;
};

// const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2, prop3 }) => {};

{
  /* <MyComponent prop1 = {23} prop2 = {"23"} prop3 /> */
}

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { theme } = useTheme();

  const handleOptionClick: QuizProps["onOptionClick"] = (
    selectedOption: number
  ) => {
    dispatch({
      type: "ATTEMPTED",
      selectedOption,
    });
  };

  const onReset: ScoreProps["onReset"] = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";
  }, [theme]);

  return (
    <>
      <Header title={"Quiz App"} />
      {state.currentQuestionIndex < state.quizData.length ? (
        <Quiz
          quiz={state.quizData[state.currentQuestionIndex]}
          onOptionClick={handleOptionClick}
        />
      ) : (
        <Score
          currentScore={state.score}
          totalScore={state.quizData.length}
          onReset={onReset}
        />
      )}
    </>
  );
}

export default App;

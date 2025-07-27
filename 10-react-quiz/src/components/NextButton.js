import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, index, numberOfQuestions, dispatch } = useQuiz();

  if (answer === null) return null;

  if (index < numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;

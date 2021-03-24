import React, { useState } from 'react';
import {fetchQuizQuestions, Difficulty, QuestionState} from './API'
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  };

  const checkAnswer = (e: any) => {

  };

  const nextQuestion = () => {

  }

  return (
    <>
      <h1>REACT QUIZ</h1>

      <button className="start" onClick={startTrivia}>
        Start
      </button>

      <p className="score"> Score: </p>

      <p>Loading Question...</p>

      {/* <QuestionCard  
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </>
  )
}

export default App;

import React from 'react';
import { AnswerObject } from '../App'; 

type props = {
    question: string;
    answers: any;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (

        <div>
           <p> Question: {questionNr}/{totalQuestions} </p>
           <p dangerouslySetInnerHTML={{ __html: question }} />
           <div>
               {answers.map((answer: string) => (
                   <div key={answer}>
                       <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                           <span dangerouslySetInnerHTML={{ __html: answer}} />
                       </button>
                   </div>
               ))}
           </div>
        </div>

    )



export default QuestionCard

import React from 'react';

type props = {
    question: string;
    answers: any;
    callback: any;
    userAnswer: any;
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
                   <div>
                       <button disabled={userAnswer} onClick={callback}>
                           <span dangerouslySetInnerHTML={{ __html: answer}} />
                       </button>
                   </div>
               ))}
           </div>
        </div>

    )



export default QuestionCard

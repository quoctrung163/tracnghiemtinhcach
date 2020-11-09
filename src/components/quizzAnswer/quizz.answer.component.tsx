import React from 'react';
import { Answer } from '../../redux/types/index';

type QuizzAnswerProps = {
  answer: Answer[]
}

const QuizzAnswer = ({ answer }: QuizzAnswerProps) => {
  console.log(answer)
  return (
    <div>
      {
        answer.map((item: any) => (
          <h5>{item.score}</h5>
        ))
      }
    </div>
  )
}

export default QuizzAnswer;
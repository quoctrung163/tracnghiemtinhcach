import React from 'react';

import QuizzQuestions from '../quizzQuestions/quizz.questions.component';

import QuizzAnswer from '../quizzAnswer/quizz.answer.component';

import { DataType} from '../../redux/types/index'

type QuizzProps = {
  data: DataType
}

const Quizz = ({ data }: QuizzProps) => {
  return (
    <>
      <form action="" id="form">
        {
          data.listQuestion.map((item: any) => (
            <>
              <QuizzQuestions question={item.question} />
              <QuizzAnswer answer={item.answer} />
            </>
          ))
        }
      </form>
      
    </>
  )
}

export default Quizz;
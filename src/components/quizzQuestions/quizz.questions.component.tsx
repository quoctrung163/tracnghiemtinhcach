import React from 'react';

type QuizzQuestionsProps = {
  question: string
}

const QuizzQuestions = ({ question }: QuizzQuestionsProps) => {
  console.log('question', question)
  return (
    <h3>{`fa ${question}` }</h3>
  )
}

export default QuizzQuestions;
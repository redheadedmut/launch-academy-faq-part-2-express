import React, { useEffect, useState } from 'react'
import Question from './Question'
import QuestionForm from './QuestionForm'

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1/questions')

      if(!response.ok){
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw(error)
      }

      const questionData = await response.json()
      setQuestions(questionData.questions)

    } catch (error) {
      console.error(error)
    }
  }

  const addNewQuestion = async (formPayload) => {
    try {
      const response = await fetch(
        '/api/v1/questions',
        {
          method: "POST",
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(formPayload)
        }
      )

      if(!response.ok){
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw(error)
      }

      const newQuestion = await response.json()
      setQuestions([...questions, newQuestion.question])

    } catch (error) {
      console.error(error)
    }
  }

  const toggleQuestionSelect = id => {
    const alreadySelected = id === selectedQuestion
    setSelectedQuestion(alreadySelected ? null : id)
  }

  const questionListItems = questions.map(({id, question, answer}) => {
    const selected = selectedQuestion === id ? true : false
    const handleClick = () => toggleQuestionSelect(id)

    return (
      <Question
        key={id}
        question={question}
        answer={answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })
  
  useEffect(
    () => { fetchData() },
    []
  )

  return (
    <>
      <div className="page">
        <h1>We Are Here To Help You</h1>
        <div className="question-list">{questionListItems}</div>
        <div >
          <QuestionForm addNewQuestion={addNewQuestion} />
        </div>
      </div>
      </>
  )
}

export default FAQList

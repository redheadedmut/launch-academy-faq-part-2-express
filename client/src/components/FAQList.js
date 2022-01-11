import React, { useEffect, useState } from 'react'
import Question from './Question'
import QuestionForm from './QuestionForm'
import { hot } from "react-hot-loader/root"

const FAQList = props => {
  //debugger
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
      //debugger
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
      debugger
      setQuestions([...questions, newQuestion.question])

    } catch (error) {
      console.error(error)
    }
  }

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })
  
  useEffect( () => {
    fetchData()
  },[])

  return (
    <>
    <div className="page">
      <h1>We Are Here To Help</h1>
      <div className="question-list">{questionListItems}</div>
    </div>
    <div>
      <QuestionForm addNewQuestion={addNewQuestion}/>
    </div>
    </>
  )
}

export default hot(FAQList)

import React from 'react'

const Question = ({ question, answer, selected, handleClick }) => {

  let displayedAnswer = null, buttonClass
  if (selected) {
    buttonClass = "fas fa-minus-square green"
    displayedAnswer = answer
  } 
  else {
    buttonClass = "fas fa-plus-square"
  }

  return (
    <div>

      <div className="faq">

        <i
          onClick={handleClick}
          className={buttonClass}
          aria-hidden="true"
        />

        <h5>
          {question}
        </h5>
        
        <p>
          {displayedAnswer}
        </p>

      </div>


    </div>
  )
}

export default Question

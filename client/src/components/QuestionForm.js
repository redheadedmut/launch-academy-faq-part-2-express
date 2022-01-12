import React, { useState } from "react";

const QuestionForm = (props) => {

    const defaultValue = { question: "", answer: "" }
    const [formInput, setFormInput] = useState(defaultValue)

    const onChangeHandler = (event) => {
        setFormInput({
            ...formInput,
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.addNewQuestion(formInput)
        setFormInput(defaultValue)
    }

    return (
        <form className="question-form faq" onSubmit={onSubmitHandler}>
            <label htmlFor="name">Question: 
                <input
                    id="question"
                    name="question"
                    onChange={onChangeHandler}
                    value={formInput.question}
                    placeholder="Enter your question here"
                />
            </label>

            <label htmlFor="name">Answer:
                <input
                    id="answer"
                    name="answer"
                    onChange={onChangeHandler}
                    value={formInput.answer}
                    placeholder="Enter your answer here"
                    />
            </label>

            <input type="submit" value="Submit Question" />
        </form>
    )
}

export default QuestionForm
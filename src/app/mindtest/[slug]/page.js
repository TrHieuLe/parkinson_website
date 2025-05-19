'use client'

import Question from "./question"
import Answer from "./answer"
import Introduction from "./introduction"
import Result from "./result"
import { useState, useEffect, useRef } from "react"
import { checkAnswer } from "../analysis_question"


export default function Test({ type, typeQuestion }) {
  const [ questions, setQuestions ] = useState(typeQuestion.questions)
  const [ choices, setChoices ] = useState(typeQuestion.choices)
  const scores = useRef(typeQuestion.scores.reduce((acc, curr) => (
    acc[curr] = 0, acc
  ), {}))

  const [ currentQuestion, setCurrentQuestion ] = useState(1) 
  const [ start, setStart ] = useState(true)

  const resetScores = () => {
    Object.keys(scores.current).forEach(key => {
      scores.current[key] = 0
    })
  }

  return (
    <>
      { start ?
        <Introduction type={ type } /> : <></> 
      }
      <div className="bg-white flex flex-col">
        { start ?           
          <button 
            onClick={ () => setStart(false) }
            className="button-question"
          >
            Bắt đầu 
          </button> :

          questions[currentQuestion - 1] ? 
            <>
              <Question className="my-3">
                Câu { currentQuestion }: { questions[currentQuestion - 1] }
              </Question>
              <div> 
                { choices.map((choice, index) =>
                  <Answer
                    onClick={ () => {
                      checkAnswer(type, currentQuestion, index, scores.current)
                      setCurrentQuestion(currentQuestion + 1) 
                    }} 
                    key={ index }
                  >
                    { choice }
                  </Answer>
                )}
              </div>  
            </> :
            <>
              <Result type={ type } scores={ scores.current } />
              <button 
                onClick={ () => {
                  resetScores()
                  setStart(true)
                  setCurrentQuestion(1)
                }}
                className="button-question  \
                  p-2 px-5 mt-3 self-center rounded-md border transition" 
              >
                Trở lại
              </button>
              <button 
                onClick={ async () => {
                  const response = await fetch(`http://localhost:5000/run`);
                  // const data = await response.json();
                  console.log(response)
                }}
                className="button-question  \
                  p-2 px-5 mt-3 self-center rounded-md border transition" 
              >
                Chuẩn đoán bằng xử lí ảnh
              </button>
            </>
        }
      </div>
    </>
  )
}
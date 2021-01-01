import React from 'react'
import {Answer} from './index'

const AnswersList = () => {
  return(
    <div className="c-grid__answer">
      <Answer content={"hoge"} />
      <Answer content={"fuga"} />
      <Answer content={"foo"} />
      <Answer content={"hoge"} />
    </div>
  )
}

export default AnswersList
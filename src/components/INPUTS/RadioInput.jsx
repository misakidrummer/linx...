import React from 'react'
import style from './Input.module.css'

const RadioInput = ({ value }) => {
  const { bolinha, bolinhas, bolinhazinha } = style

  return (
    <div className={bolinhazinha}>
      <input className={bolinha} type='radio' value={value}>
      </input>

      <label className={bolinhas}>

        {value}
      </label>
    </div>
  )
}

export default RadioInput
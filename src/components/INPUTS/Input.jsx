import React from 'react'
import style from './Input.module.css'

const inputTexet = ({ id, label, type, pattern }) => {
  const { inputs, retangulo, inputDois } = style

  return (
    <div className={inputDois}>
      <label className={retangulo} htmlFor={id}>
        {label}
 
      </label>

      <input
        className={inputs}
        type={type != null ? type : 'text'}
        pattern={pattern}
        id={id}
      />

    </div>
  )
}

export default inputTexet
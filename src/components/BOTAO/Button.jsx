import React from 'react'
import style from './Button.module.css'
 
const butao = ({ type, text, href, clickHandler }) => {
  const { firstBotao,  segundoBotao } = style

  return (
    <a href={href} style={{ all: 'unset', scrollBehavior: "smooth"
  }}>
      <button className={type == 'primary' ? firstBotao : segundoBotao} onClick={clickHandler}>
        {text}
      </button >
    </a>
  )
}

export default butao
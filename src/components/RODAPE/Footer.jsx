import React from 'react'
import style from './Footer.module.css'
 
const rodape = () => {
  const { EstiloRodape,  pontinhaDois } = style

  return (
    <footer className={EstiloRodape}>
      <div className={pontinhaDois}>
      </div>

      <p class="texto">
        Testando suas habilidades em HTML, CSS e JS.
        <br />
        Linx Impulse
        <br />
        2019
      </p>
    </footer>
  )
}

export default rodape
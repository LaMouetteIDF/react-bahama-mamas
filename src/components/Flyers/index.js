import React from 'react'

import cn from 'classnames';
import styles from './styles.module.scss'

export default function Flyers() {
  return (
    <div className={cn(styles.flyers)}>
      <a
        href={require('assets/5a15a102fb323cfc300162025e719272.png').default}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require('assets/5a15a102fb323cfc300162025e719272.png').default}
          alt="logo"
        />
      </a>

      <div/>

      <a
        target="_blank"
        rel="noreferrer"
        href={require('assets/79286786ec51e03b1069383f4e2d4e5e.png').default}
      >
        <img
          src={require('assets/79286786ec51e03b1069383f4e2d4e5e.png').default}
          alt="logo"
        />
      </a>
    </div>
  )
}

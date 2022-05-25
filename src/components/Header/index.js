import React from 'react'
import cn from 'classnames'

import styles from '../UntitledPage.module.scss'

export default function Header() {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles.header_video)}>
        <video autoPlay loop muted >
          <source src={require('assets/tacos.mp4').default} type="video/mp4" />
        </video>
      </div>

      <div className={cn(styles.header_navbar)}>
        <a href="#produits">
          <h2>Nos Produits</h2>
        </a>
        <a href="#event">
          <h2>Evenement</h2>
        </a>
        <a href="#galerie">
          <h2>Galerie</h2>
        </a>
      </div>

      <div className={cn(styles.header_logo)}>
        <img
          src={require('assets/a0220290df4c4baf9a01b99524e3875b.png').default}
          alt="logo"
        />
      </div>
    </div>
  )
}

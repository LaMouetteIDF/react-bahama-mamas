import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Flyers from './Flyers'
import Events from './Events'

import cn from 'classnames'
import styles from './UntitledPage.module.scss'
import Galerie from './Galerie'
import Neon from './Neon'

export default function BahamaMamas() {
  return (
    <div
      style={{
        '--src': `url(${
          require('assets/background_layout.jpg').default
        })`
      }}
      className={cn(styles.layout1)}
    >
      <Header />

      <div className={cn(styles.layout2)}>
        <Neon name="produits" />

        <Flyers />

        <Neon name="event" />

        <Events />

        <Neon name="galerie" />

        <Galerie />

        <Neon />
      </div>

      <Footer />
    </div>
  )
}

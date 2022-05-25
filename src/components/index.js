import React from 'react'
import Flyers from './Flyers'
import Header from './Header'

import cn from 'classnames'
import styles from './UntitledPage.module.scss'
import Footer from './Footer'
import Events from './Events'

export default function BahamaMamas() {
  return (
    <div>
      <Header />
      <div className={cn(styles.root_layout)}>
        <Flyers />
        {/* <Events /> */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

BahamaMamas.inStorybook = true

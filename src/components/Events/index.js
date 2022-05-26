import React from 'react'

import cn from 'classnames'
import styles from '../UntitledPage.module.scss'

export default function Events() {
  return (
    <div className={cn(styles.event)}>
      <a href={require('assets/flyer-event-ouverture.jpg').default}>
        <img
          src={require('assets/flyer-event-ouverture.jpg').default}
          alt="event-ouverture"
        />
      </a>
    </div>
  )
}

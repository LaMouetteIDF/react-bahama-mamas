import React from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'
import ImgModal from 'components/ImgModal'

export default function Events() {
  return (
    <div className={cn(styles.event)}>
      <div>
        <ImgModal name="flyer-event-ouverture.jpg" />
      </div>
    </div>
  )
}

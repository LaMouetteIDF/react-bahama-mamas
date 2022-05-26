import React from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'
import ImgModal from 'components/ImgModal'

export default function Flyers() {
  return (
    <div className={cn(styles.flyers)}>
      <div className={cn(styles.flyer)}>
        <ImgModal name="5a15a102fb323cfc300162025e719272.png" />
      </div>

      <div className={cn(styles.espace)} />

      <div className={cn(styles.flyer)}>
        <ImgModal name="79286786ec51e03b1069383f4e2d4e5e.png" />
      </div>
    </div>
  )
}

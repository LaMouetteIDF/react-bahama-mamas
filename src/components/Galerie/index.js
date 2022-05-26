import React from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'
import ImgModal from 'components/ImgModal'

export default function Galerie() {
  return (
    <div className={cn(styles.galerie)}>
      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522004654_1.jpg" />
      </div>

      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522004619_1.jpg" />
      </div>

      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522004845_1.jpg" />
      </div>

      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522005130_1.jpg" />
      </div>

      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522004940_1.jpg" />
      </div>

      <div className={cn(styles.image_galerie)}>
        <ImgModal name="20220522004759_1.jpg" />
      </div>
    </div>
  )
}

import React from 'react'

import cn from 'classnames'
import styles from '../UntitledPage.module.scss'

export default function Galerie() {
  return (
    <div className={cn(styles.galerie)}>
      <img
        src={require('assets/d4a0f970876eb9d8c9de380b1115e2c6.png').default}
        alt="img"
      />
      <img
        src={require('assets/56976f585ac69d0f8475f4c5f1748620.png').default}
        alt="img"
      />
      <img
        src={require('assets/dfa71c221f0302a37b99f62143a366f7.png').default}
        alt="img"
      />
      <img
        src={require('assets/933728b1aeb8f949c647b5099cee98af.png').default}
        alt="img"
      />
      <img
        src={require('assets/ca4b37565a42ec5cc612c64254e7bcad.png').default}
        alt="img"
      />
      <img
        src={require('assets/57fdc6254dc2441896348729ed48457d.png').default}
        alt="img"
      />
    </div>
  )
}

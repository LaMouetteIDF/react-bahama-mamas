import React from 'react'

import cn from 'classnames'
import styles from '../UntitledPage.module.scss'

// A refaire !!!
export default function Events() {
  return (
    <div className={cn(styles.event)}>
      <h3>Events</h3>
      <img src='https://img.gta5-mods.com/q95/images/bahama-mamas-party/d73045-2.png' alt='img'></img>
    </div>

    // <div className={cn(styles.block6, styles.block6_layout)}>
    //   <div className={cn(styles.block6, styles.block6_layout)}>
    //     <div className={cn(styles.block8, styles.block8_layout)}>
    //       <div className={cn(styles.block8_item)}>
    //         <div
    //           style={{
    //             '--src': `url(${
    //               require('assets/33c5d9bdb18836d453cf315abb13bf94.png').default
    //             })`
    //           }}
    //           className={cn(styles.image6, styles.image6_layout)}
    //         />
    //       </div>
    //       <div className={cn(styles.block8_spacer)} />
    //       <div className={cn(styles.block8_item)}>
    //         <div
    //           style={{
    //             '--src': `url(${
    //               require('assets/46cd4aeed88334df0c9f32f6856e14f5.png').default
    //             })`
    //           }}
    //           className={cn(styles.image6, styles.image6_layout1)}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

import React from 'react'

import cn from 'classnames'
import styles from '../UntitledPage.module.scss'

// A refaire !!!
export default function Events() {
  return (
    <div className={cn(styles.group, styles.group_layout)}>
      <div className={cn(styles.block6, styles.block6_layout)}>
        <div
          id="event"
          style={{
            '--src': `url(${
              require('assets/b44e715b9bb8d61f7ae3152aa85bde11.png').default
            })`
          }}
          className={cn(styles.image5, styles.image5_layout)}
        />

        <div className={cn(styles.block8, styles.block8_layout)}>
          <div className={cn(styles.block8_item)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/33c5d9bdb18836d453cf315abb13bf94.png').default
                })`
              }}
              className={cn(styles.image6, styles.image6_layout)}
            />
          </div>
          <div className={cn(styles.block8_spacer)} />
          <div className={cn(styles.block8_item)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/46cd4aeed88334df0c9f32f6856e14f5.png').default
                })`
              }}
              className={cn(styles.image6, styles.image6_layout1)}
            />
          </div>
        </div>

        <div
          style={{
            '--src': `url(${
              require('assets/b44e715b9bb8d61f7ae3152aa85bde11.png').default
            })`
          }}
          className={cn(styles.image5, styles.image5_layout)}
        />

        <div id="galerie" className={cn(styles.block9, styles.block9_layout)}>
          <div className={cn(styles.block10, styles.block10_layout)}>
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/d4a0f970876eb9d8c9de380b1115e2c6.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
            <div className={cn(styles.block10_spacer)} />
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/56976f585ac69d0f8475f4c5f1748620.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
            <div className={cn(styles.block10_spacer)} />
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/dfa71c221f0302a37b99f62143a366f7.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
          </div>

          <div className={cn(styles.block10, styles.block10_layout1)}>
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/933728b1aeb8f949c647b5099cee98af.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
            <div className={cn(styles.block10_spacer)} />
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/ca4b37565a42ec5cc612c64254e7bcad.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
            <div className={cn(styles.block10_spacer)} />
            <div className={cn(styles.block10_item)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/57fdc6254dc2441896348729ed48457d.png')
                      .default
                  })`
                }}
                className={cn(styles.image7, styles.image7_layout)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

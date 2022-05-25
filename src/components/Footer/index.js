import React from 'react'

import cn from 'classnames'
import styles from '../UntitledPage.module.scss'

// A refaire !!!
export default function Footer() {
  return (
    <div
      style={{
        '--src': `url(${
          require('assets/cc4ac89b6f7fb43126753e6b78642816.png').default
        })`
      }}
      className={cn(styles.block11, styles.block11_layout)}
    >
      <div className={cn(styles.flex, styles.flex_layout)}>
        <div className={cn(styles.text_body, styles.text_body_layout)}>
          {'© 2022 tacos inc.'}
        </div>
        <div className={cn(styles.flex_spacer)} />
        <div className={cn(styles.flex_item)}>
          <div className={cn(styles.block12, styles.block12_layout)}>
            <div className={cn(styles.block12_item)}>
              <div className={cn(styles.block13, styles.block13_layout)}>
                <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>
                  {'CONTACTEZ-NOUS'}
                </h3>

                <div className={cn(styles.block14, styles.block14_layout)}>
                  <div className={cn(styles.block15, styles.block15_layout)}>
                    <h5
                      className={cn(
                        styles.highlights,
                        styles.highlights_layout
                      )}
                    >
                      {'TÉLÉPHONE :'}
                    </h5>
                    <div className={cn(styles.block15_spacer)} />
                    <h5
                      className={cn(
                        styles.highlights,
                        styles.highlights_layout
                      )}
                    >
                      {'06 13 65 06 69'}
                    </h5>
                  </div>

                  <div className={cn(styles.block16, styles.block16_layout)}>
                    <h5
                      className={cn(
                        styles.highlights,
                        styles.highlights_layout
                      )}
                    >
                      {'EMAIL:'}
                    </h5>
                    <div className={cn(styles.block16_spacer)} />
                    <h5
                      className={cn(
                        styles.highlights,
                        styles.highlights_layout
                      )}
                    >
                      {'michel.dorio@discord.gg'}
                    </h5>
                  </div>

                  <div className={cn(styles.block17, styles.block17_layout)}>
                    <h5
                      className={cn(
                        styles.highlights1_box,
                        styles.highlights1_box_layout
                      )}
                    >
                      <pre className={cn(styles.highlights1)}>
                        {'SERVEUR GTA RP : https://discord.gg/gprp '}
                      </pre>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={cn(styles.block12_spacer)} />
            <div className={cn(styles.block12_item1)}>
              <div className={cn(styles.block18, styles.block18_layout)}>
                <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>
                  {'TROUVEZ-NOUS'}
                </h3>
                <div className={cn(styles.block18_item)}>
                  <div
                    style={{
                      '--src': `url(${
                        require('assets/store_is_here.png').default
                      })`
                    }}
                    className={cn(styles.group1, styles.group1_layout)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(styles.flex_spacer1)} />
        <div className={cn(styles.flex_item1)}>
          <div
            style={{
              '--src': `url(${
                require('assets/fca1221b3fb6631682f25d61855f18bb.png').default
              })`
            }}
            className={cn(styles.icon, styles.icon_layout)}
          />
        </div>
      </div>
    </div>
  )
}

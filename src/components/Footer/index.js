import React from 'react'

import cn from 'classnames'
import styles from './styles.module.scss'

const date = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <span className={cn(styles.societe)}>© {date} tacos inc.</span>
      <div className={cn(styles.logo_gprp)}>
        <img
          src={require('assets/fca1221b3fb6631682f25d61855f18bb.png').default}
          alt="logo_gprp"
        />
      </div>

      <div>
        <h4>CONTACTEZ-NOUS</h4>

        <div>
          <p>
            <span>TÉLÉPHONE: </span>06 13 65 06 69
          </p>

          <p>
            <span>EMAIL: </span>michel.dorio@discord.gg
          </p>

          <p>
            <span>SERVEUR GTA RP: </span>
            <a
              href="https://discord.gg/gprp"
              target="_blank"
              rel="noreferrer"
            >
              https://discord.gg/gprp
            </a>
          </p>
        </div>
      </div>

      <div>
        <h4>TROUVEZ-NOUS</h4>
        <a
          href={require('assets/store_is_here.png').default}
          target="_blank"
          rel="noreferrer"
        >
          <img src={require('assets/store_is_here.png').default} alt="map" />
        </a>
      </div>
    </footer>
  )
}

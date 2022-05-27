import React from 'react';

import ImgModal from 'components/ImgModal';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function Footer() {
  const date = new Date().getFullYear();

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

        <div className={cn(styles.contact)}>
          <p>
            <span>TÉLÉPHONE: </span>06 13 65 06 69
          </p>

          <p>
            <span>EMAIL: </span>michel.dorio@discord.gg
          </p>

          <p>
            <span>SERVEUR GTA RP: </span>
            <a href="https://discord.gg/gprp" target="_blank" rel="noreferrer">
              https://discord.gg/gprp
            </a>
          </p>
        </div>
      </div>

      <div>
        <h4>TROUVEZ-NOUS</h4>
        <div className={cn(styles.map)}>
          <ImgModal name="store_is_here.png" />
        </div>
      </div>
    </footer>
  );
}

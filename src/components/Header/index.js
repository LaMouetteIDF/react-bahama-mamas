import React from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles.header_video)}>
        <video autoPlay loop muted>
          <source src={require('assets/tacos.mp4').default} type="video/mp4" />
        </video>
      </div>

      <div className={cn(styles.header_navbar)}>
        <a href="#produits">
          <h2>Nos Produits</h2>
        </a>
        <a href="#event">
          <h2>Evenement</h2>
        </a>
        <a href="#galerie">
          <h2>Galerie</h2>
        </a>
      </div>

      <div className={cn(styles.header_logo)}>
        <img src={require('assets/logo_bahama.png').default} alt="logo" />
      </div>
    </div>
  );
}

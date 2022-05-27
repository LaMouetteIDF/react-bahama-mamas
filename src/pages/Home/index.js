import React from 'react';

import Header from 'components/Header';
import Neon from 'components/Neon';
import Flyers from 'components/Flyers';
import Events from 'components/Events';
import Galerie from 'components/Galerie';
import Footer from 'components/Footer';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div
      style={{
        '--src': `url(${require('assets/background_layout.jpg').default})`
      }}
      className={cn(styles.layout1)}
    >
      <Header />

      <div className={cn(styles.layout2)}>
        <Neon name="produits" />

        <Flyers />

        <Neon name="event" />

        <Events />

        <Neon name="galerie" />

        <Galerie />

        <Neon />
      </div>

      <Footer />
    </div>
  );
}

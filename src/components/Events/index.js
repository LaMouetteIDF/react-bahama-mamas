import React from 'react';

import ImgModal from 'components/ImgModal';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function Events() {
  return (
    <div className={cn(styles.event)}>
      <div>
        <ImgModal name="flyer-event-ouverture.jpg" />
      </div>
    </div>
  );
}

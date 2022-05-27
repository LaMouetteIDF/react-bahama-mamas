import React from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function Neon(props) {
  return (
    <div id={props.name} className={cn(styles.neon)}>
      <img
        src={require('assets/b44e715b9bb8d61f7ae3152aa85bde11.png').default}
        alt="neon"
      />
    </div>
  );
}

import React, { useState } from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default function ImgModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function propagationStoped(e) {
    e.stopPropagation();
  }

  return (
    <div className={cn(styles.image)}>
      <img
        className={cn(styles.img)}
        onClick={() => setIsOpen(true)}
        src={require(`assets/${props.name}`).default}
        alt="img"
      />
      {isOpen ? (
        <div className={cn(styles.openModalImg)} onClick={closeModal}>
          <div className={cn(styles.divImg)} onClick={propagationStoped}>
            <span onClick={() => setIsOpen(false)}>X</span>
            <img src={require(`assets/${props.name}`).default} alt="img" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

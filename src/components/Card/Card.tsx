import React from 'react';
import styles from './Card.module.scss';
import Heart from '../../common/src/assets/icons/Heart';
import Trash from '../../common/src/assets/icons/Trash';


export default function Card(props: {
  id?: number,
  image: string,
  caption: string,
}) {

  return (
    <figure className={ styles.card }>
      <div className={ styles.imageWrapper }>
        <img src={ props.image } alt={ props.caption } className={ styles.image } />
      </div>
      <figcaption className={ styles.captionWrapper }>
        <p className={ styles.caption }>{ props.caption }</p>
        <div className={ styles.iconsBlock }>
          <span className={ styles.icon } title='Лайкнуть'><Heart /></span>
          <span className={ styles.icon } title='Удалить'><Trash /></span>
        </div>
      </figcaption>
    </figure>
  )
}
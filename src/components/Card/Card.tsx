import React from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';
import Heart from '../../common/src/assets/icons/Heart';
import Trash from '../../common/src/assets/icons/Trash';
import NewTab from '../../common/src/assets/icons/NewTab';


export default function Card(props: {
  id: number,
  url: string,
  image: string,
  photographer: string,
  photographer_url: string,
  alt: string,
  liked?: boolean,
  removeCard: (cardId: number) => void,
  likeCard: (cardId: number) => void,
}) {
  const heartIconClass = cn(
    styles.icon,
    props.liked && styles.isLiked,
  );


  return (
    <figure className={ styles.card }>
      <div className={ styles.imageWrapper }>
        <img src={ props.image } alt={ props.alt } className={ styles.image } />
      </div>
      <figcaption className={ styles.figcaption }>
        <a className={ styles.photographer } href={ props.photographer_url } target='_blank' title='Страница фотографа' rel='noreferrer'>{ props.photographer }</a>
        <span className={ styles.caption } title={ props.alt }>{ props.alt }</span>
        <div className={ styles.iconsBlock }>
          <button className={ heartIconClass } title='Лайкнуть' onClick={ () => props.likeCard(props.id) }><Heart width='16' height='14'/></button>
          <button className={ styles.icon } title='Удалить' onClick={ () => props.removeCard(props.id) }><Trash width='14' height='16'/></button>
          <a className={ styles.icon } href={ props.url } target='_blank' title='Посмотреть на сайте' rel='noreferrer'><NewTab /></a>
        </div>
      </figcaption>
    </figure>
  )
}
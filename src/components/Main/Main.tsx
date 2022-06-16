import React, { useEffect } from 'react';
import { useTypedSelector } from '../../common/utils/useTypedSelector';
import { useActions } from '../../common/utils/useActions';
import { Photo } from '../../common/types/photos';
import styles from './Main.module.scss';
import Loader from '../../common/src/components/Loader/Loader';
import Card from '../Card/Card';
import CardsList from '../CardsList/CardsList';
import Switcher from '../../common/src/components/Switcher/Switcher';
import ErrorMessage from '../../common/src/components/ErrorMessage/ErrorMessage';


export default function Main() {
  const { photos, isLoading, error, page, isDisplayLikedPhotos } = useTypedSelector(state => state.photos);
  const { fetchPhotosAC, setPhotosPageAC, removePhotoAC, toggleLikeAC, toggleDisplayLikedPhotosAC } = useActions();
  const currentPhotos = filterPhotos(photos, isDisplayLikedPhotos);

  function filterPhotos(photosArray: Photo[], value: boolean) {
    if(value) return photosArray.filter((photo: Photo) => photo.liked_by_user);
    return photosArray;
  }

  function getPhotos() {
    fetchPhotosAC(page);
  }
  function nextPage() {
    setPhotosPageAC(page + 1);
  }
  function removePhoto(cardId: string) {
    removePhotoAC(cardId);
  }
  function toggleLike(cardId: string) {
    toggleLikeAC(cardId);
  }
  function showLikedPhotos(value: boolean) {
    toggleDisplayLikedPhotosAC(value);
  }

  useEffect(() => {
    getPhotos();
  }, [page])


  return (
    <div className={ styles.main }>
      <div className={ styles.filterBlock }>
        <p className={ styles.filterText }>Показать понравившиеся фотографии</p>
        <Switcher onChange={ showLikedPhotos } />
      </div>
      {
        !!currentPhotos.length ?
        <>
          <CardsList>
            {
              currentPhotos.map((photo: Photo) => {
                return (
                  <Card
                    key={ photo.id }
                    id={ photo.id }
                    url={ photo.url }
                    image={ photo.src.medium }
                    photographer={ photo.photographer }
                    photographer_url={ photo.photographer_url }
                    alt={ photo.alt }
                    liked={ photo.liked }
                    removePhoto={ removePhoto }
                    toggleLike={ toggleLike }
                  />
                )
              })
            }
          </CardsList>
          { isLoading ? <Loader/> : <button className={ styles.moreButton } onClick={ nextPage }>Ещё фотографии</button> }
          <ErrorMessage error={ error } />
        </>
        :
        <>
          <p className={ styles.informText }>Нет фотографий =(</p>
          <ErrorMessage error={ error } />
          { isLoading && !photos.length && <Loader/> }
        </>
      }
    </div>
  )
}
export type Src = {
  original: string,
  large2x: string,
  large: string,
  medium: string,
  small: string,
  portrait: string,
  landscape: string,
  tiny: string,
}
export type Photo = {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: Src,
  liked: boolean,
  alt: string,
}

export type PhotosState = {
  photos: Photo[],
  isLoading: boolean,
  error: string | null,
  page: number,
  isDisplayLikedPhotos: boolean,
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
  TOGGLE_LIKE = 'TOGGLE_LIKE',
  REMOVE_PHOTO = 'REMOVE_PHOTO',
  TOGGLE_DISPLAY_LIKED_PHOTOS = 'TOGGLE_DISPLAY_LIKED_PHOTOS',
}

type FetchPhotosAction = {
  type: PhotosActionTypes.FETCH_PHOTOS,
}
type FetchPhotosSuccessAction = {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  photos: Photo[],
}
type FetchPhotosErrorAction = {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  errorMessage: string,
}
type SetPhotosPage = {
  type: PhotosActionTypes.SET_PHOTOS_PAGE,
  page: number,
}
type RemovePhoto = {
  type: PhotosActionTypes.REMOVE_PHOTO,
  id: number,
}
type ToggleLike = {
  type: PhotosActionTypes.TOGGLE_LIKE,
  id: number,
}
type ToggleDisplayLikedPhotos = {
  type: PhotosActionTypes.TOGGLE_DISPLAY_LIKED_PHOTOS,
  displayLikedPhotos: boolean,
}
export type PhotosActions =
  FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | SetPhotosPage
  | RemovePhoto
  | ToggleLike
  | ToggleDisplayLikedPhotos
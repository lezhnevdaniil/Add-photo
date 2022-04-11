import { getPhotos } from '../../services';

export const initialState = {
  images: getPhotos() || [],
};

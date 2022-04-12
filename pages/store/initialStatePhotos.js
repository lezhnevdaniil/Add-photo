import { getPhotos } from '../../services/initialStatePhotosService';

export const initialStatePhotos = {
  images: getPhotos() || [],
};

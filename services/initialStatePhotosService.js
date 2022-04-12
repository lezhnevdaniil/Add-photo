export const getPhotos = () => {
    let photos = [];
    if (typeof window !== 'undefined') {
      photos = JSON.parse(localStorage.getItem('photo')) || [];
    }
    return photos;
  };
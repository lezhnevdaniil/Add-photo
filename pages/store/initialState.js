//const photos = JSON.parse(localStorage.getItem('photo')) || []
let photos = [];
if (process.browser && null) {
  const image = JSON.parse(localStorage.getItem('photo'));
  if (image) {
    photos = image;
  }
}

export const initialState = {
  images: photos,
};

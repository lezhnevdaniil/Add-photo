export const getPhotos = () => {
  let photos = [];
  if (typeof window !== 'undefined') {
    photos = JSON.parse(localStorage.getItem('photo')) || [];
  }
  return photos;
};

export const converterBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const uploadImage = async (
  e,
  setTestImages,
  title,
  description,
  setNewImage
) => {
  const file = e.dataTransfer.files[0];
  const base64 = await converterBase64(file);
  setTestImages(base64);
  if (title && description) {
    setNewImage({
      title,
      description,
      image: base64,
    });
  }
};

export const draStartHandler = ({ e, setDrag }) => {
  e.preventDefault();
  setDrag(true);
};

export const draLeaveHandler = ({ e, setDrag }) => {
  e.preventDefault();
  setDrag(false);
};

export const onDropHandler = ({
  e,
  newImage,
  setSnackbar,
  setOpen,
  uploadImage,
  setDrag,
  title,
  description,
  setTestImages,
  setNewImage,
}) => {
  if (!newImage[title] && !newImage[description]) {
    setSnackbar('Complete  all fields');
    setOpen(true);
  }
  e.preventDefault();
  uploadImage(e, setTestImages, title, description, setNewImage);
  setDrag(false);
};

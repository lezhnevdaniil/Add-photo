import { useDispatch, useSelector } from 'react-redux';
import { addImage } from './store/actionsCreator/actions';
import { deleteImages } from './store/actionsCreator/actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Snackbar from '@mui/material/Snackbar';
import styles from '../styles/Home.module.scss';
import { draLeaveHandler, draStartHandler, getPhotos, onDropHandler, uploadImage } from '../services';

export default function Home() {
  const dispatch = useDispatch();
  const [drag, setDrag] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [testImages, setTestImages] = useState();
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState('');
  const [newImage, setNewImage] = useState({
    id: '',
    title: '',
    description: '',
    image: '',
  });

  const router = useRouter();

  useEffect(() => {
    if (newImage.title && newImage.description) {
      dispatch(addImage(newImage));
      const tmp = getPhotos();
      tmp.push(newImage);
      localStorage.setItem('photo', JSON.stringify(tmp));
      setNewImage({
        title: '',
        description: '',
        image: '',
      });
      router.push('/gallery');
    }
  }, [newImage]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          message={snackbar}
        />
        <div>
          <input
            className={styles.title}
            name='title'
            placeholder='Photo Gallery'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <textarea
            maxLength='144'
            className={styles.description}
            name='description'
            placeholder='A selection of the latest photos from our restaurant and some of our favorite dishes'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={styles.photo}>
          {drag ? (
            <div
              name='photo'
              className={styles.dropArea}
              onDragStart={(e) => draStartHandler({e, setDrag})}
              onDragLeave={(e) => draLeaveHandler({e, setDrag})}
              onDragOver={(e) => draStartHandler({e, setDrag})}
              onDrop={(e) => onDropHandler({e, newImage, setSnackbar, setOpen, uploadImage, setDrag, title, description, setTestImages, setNewImage})}
            >
              Release the photo
            </div>
          ) : (
            <div
              className={styles.dragArea}
              onDragStart={(e) => draStartHandler({e, setDrag})}
              onDragLeave={(e) => draLeaveHandler({e, setDrag})}
              onDragOver={(e) => draStartHandler({e, setDrag})}
            >
              Drag photos here
            </div>
          )}
        </div>
        <div
          className={styles.delete}
          onClick={() => {
            dispatch(deleteImages()),
              localStorage.clear(),
              setSnackbar('Gallery successfully cleared'),
              setOpen(true);
          }}
        >
          <p>Delete ALL photos</p>
        </div>
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { addImage } from "./store/actionsCreator/actions";
import { deleteImages } from "./store/actionsCreator/actions";

import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [drag, setDrag] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [testImages, setTestImages] = useState();
    const [newImage, setNewImage] = useState({
    id: '',
    title: "",
    description: "",
    image: "",
  });

  const uploadImage = async (e) => {
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

  const converterBase64 = (file) => {
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
  const router = useRouter();

  useEffect(() => {
    if (newImage.title && newImage.description) {
      dispatch(addImage(newImage));
      const tmp = JSON.parse(localStorage.getItem("photo")) || [];
      tmp.push(newImage);
      localStorage.setItem("photo", JSON.stringify(tmp));
      setNewImage({
        title: "",
        description: "",
        image: "",
      });
      router.push("/gallery");
    }
  }, [newImage]);

  const draStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const draLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    uploadImage(e);
    setDrag(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div>
          <input
            className={styles.title}
            name="title"
            placeholder="Photo Gallery"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <textarea
            maxLength="144"
            className={styles.description}
            name="description"
            placeholder="A selection of the latest photos from our restaurant and some of our favorite dishes"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={styles.photo}>
          {drag ? (
            <div
              name="photo"
              className={styles.dropArea}
              onDragStart={(e) => draStartHandler(e)}
              onDragLeave={(e) => draLeaveHandler(e)}
              onDragOver={(e) => draStartHandler(e)}
              onDrop={(e) => onDropHandler(e)}
            >
              Release the photo
            </div>
          ) : (
            <div
              className={styles.dragArea}
              onDragStart={(e) => draStartHandler(e)}
              onDragLeave={(e) => draLeaveHandler(e)}
              onDragOver={(e) => draStartHandler(e)}
            >
              Drag photos here
            </div>
          )}
        </div>
        <div
          className={styles.delete}
          onClick={() => { dispatch(deleteImages()), localStorage.clear()}}
        >
          <p>Delete ALL photos</p>
        </div>
      </div>
    </div>
  );
}

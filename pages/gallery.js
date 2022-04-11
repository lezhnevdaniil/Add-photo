//import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
// import home from "../public/logo/home.svg";
// import leftArrow from "../public/logo/leftArrow.svg";
// import rightArrow from "../public/logo/rightArrow.svg";
import styles from "../styles/Gallery.module.scss";
import ModalInformation from "./ModalInformation";

export default function Gallery() {
  const store = useSelector((store) => store);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [activeInformation, setActiveInformation] = useState(false);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setImages(
      JSON.parse(localStorage.getItem("photo")).slice(9 * (page - 1), 9) || []
    );
  }, []);

  useEffect(() => {
    const start = 9 * (page - 1);
    setImages(
      JSON.parse(localStorage.getItem("photo")).slice(start, start + 9) || []
    );
  }, [page]);

  const incPage = () => {
    const local = JSON.parse(localStorage.getItem("photo")) || [];
    if (local.length > page * 9) setPage(page + 1)
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {images.map((item) => (
            <img
              onClick={() => {
                setActiveInformation(true), setPhoto(item);
              }}
              src={item.image}
              className={styles.img}
            ></img>
          ))}
        </div>
        <div className={styles.links}>
          <div className={styles.containerSvg}>
            {page > 1 && (
              <img
                onClick={() => setPage(page - 1)}
                src={"/logo/leftArrow.svg"}
                className={styles.svg}
              ></img>
            )}
          </div>
          <Link href="/">
            <div className={styles.containerSvg}>
              <img src={"/logo/home.svg"} className={styles.svg}></img>
            </div>
          </Link>
          <div className={styles.containerSvg}>
            { images.length === 9 &&
              <img
                onClick={incPage}
                src={"/logo/rightArrow.svg"}
                className={styles.svg}
              ></img>
            }
          </div>
        </div>
      </div>
      {activeInformation && (
        <ModalInformation
          setActiveInformation={setActiveInformation}
          activeInformation={activeInformation}
          photo={photo}
        />
      )}
    </div>
  );
}

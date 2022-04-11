//import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../styles/Information.module.scss";

export default function ModalInformation({
  activeInformation,
  setActiveInformation,
  photo
}) {

  return (
    <div
      className={activeInformation ? styles.modal_active : styles.modal}
      onClick={() => setActiveInformation(false)}
    >
      <div
        className={
          activeInformation ? styles.modalContent_active : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.information}>
          <div className={styles.text}>
            <p>{photo.title}</p>
            <p>{photo.description}</p>
          </div>
          <button
            className={styles.buttonCancel}
            onClick={() => setActiveInformation(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

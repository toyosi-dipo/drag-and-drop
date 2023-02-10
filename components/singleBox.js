import styles from "./singleBox.module.css";
import Image from "next/image";
import { useRef } from "react";

function SingleBox({ image }) {
  const boxRef = useRef();
  const imageRef = useRef();

  function DragOverHandler(e) {
    e.preventDefault();
    const box = boxRef.current;
    box.classList.add(styles["current"]);
  }

  function DragLeaveHandler() {
    const box = boxRef.current;
    box.classList.remove(styles["current"]);
  }

  function dropHandler(e) {
    const box = e.target;
    const image = document.getElementById("my-image");
    // if the image is inside the same box, do nothing
    if (image === box) {
      return;
    }
    box.appendChild(image);
    DragLeaveHandler();
  }

  return (
    <div
      className={styles.box}
      onDragOver={DragOverHandler}
      onDragLeave={DragLeaveHandler}
      onDrop={dropHandler}
      ref={boxRef}
    >
      {image && (
        <Image
          id="my-image"
          className={styles.img}
          src="/images/img.jpg"
          alt="oluwatoyosi"
          width={160}
          height={160}
          draggable="true"
        />
      )}
    </div>
  );
}

export default SingleBox;

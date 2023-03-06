import { useState } from "react";
import classes from "./ImageSection.module.scss";
import Image from "next/image";

type Image = {
  id: number;
  src: string;
  alt: string;
};

interface ImageSectionProps {
  images: Image[];
}

const ImageSection = ({ images }: ImageSectionProps) => {
  const [imageId, setImageId] = useState(images[0].id);

  const mainImage = images.find((image) => image.id === imageId);

  return (
    <section className={classes.wrapper}>
      {mainImage && (
        <div className={classes["wrapper__main-image"]}>
          <Image src={mainImage.src} width={445} height={445} alt="" />
        </div>
      )}

      <div className={classes["wrapper__switch-image"]}>
        {images.map((image) => (
          <button
            className={classes["image-button"]}
            key={image.id}
            onClick={() => setImageId(image.id)}
          >
            <Image
              className={image.id === imageId ? classes["active-image"] : ""}
              src={image.src}
              width={88}
              height={88}
              alt={image.alt}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;

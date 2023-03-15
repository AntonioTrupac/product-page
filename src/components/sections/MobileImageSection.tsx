import { useState } from 'react';
import classes from './MobileImageSection.module.scss';
import Image from 'next/image';
import { Next, Previous } from '../icons';

type ImageData = {
  id: number;
  src: string;
  alt: string;
};

interface MobileImageSectionProps {
  images: ImageData[];
}

const MobileImageSection = ({ images }: MobileImageSectionProps) => {
  const [imageId, setImageId] = useState(images[0].id);

  const handlePreviousImage = () => {
    const previousImage = images.find((image) => image.id === imageId - 1);

    if (previousImage) {
      setImageId(previousImage.id);
    } else {
      setImageId(images[images.length - 1].id);
    }
  };

  const handleNextImage = () => {
    const nextImage = images.find((image) => image.id === imageId + 1);

    if (nextImage) {
      setImageId(nextImage.id);
    } else {
      setImageId(images[0].id);
    }
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes['wrapper__image-container']}>
        <Image
          src={images[imageId - 1].src}
          alt={images[imageId - 1].alt}
          fill
        />

        <button
          className={classes['wrapper__image-previous']}
          onClick={handlePreviousImage}
        >
          <Previous />
        </button>
        <button
          className={classes['wrapper__image-next']}
          onClick={handleNextImage}
        >
          <Next />
        </button>
      </div>
    </section>
  );
};

export default MobileImageSection;

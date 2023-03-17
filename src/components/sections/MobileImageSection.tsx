/* eslint-disable @next/next/no-img-element */
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
    <div className={classes['wrapper__image-container']}>
      <Image
        fill
        src={images[imageId - 1].src}
        alt={images[imageId - 1].alt}
        className={classes['wrapper__image']}
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
  );
};

export default MobileImageSection;

import Image from 'next/image';
import classes from './ImageModal.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Next, Previous } from '../icons';

interface ImageModalProps {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const ImageModal = ({ images }: ImageModalProps) => {
  const [imageId, setImageId] = useState(images[0].id);

  const mainImage = images.find((image) => image.id === imageId);

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
    <>
      {mainImage && (
        <div className={classes['main-image-container']}>
          <Image src={mainImage.src} width={550} height={550} alt='' />

          <button
            className={classes.previous}
            type='button'
            onClick={handlePreviousImage}
            aria-label='previous image'
          >
            <Previous />
          </button>

          <button
            className={classes.next}
            type='button'
            onClick={handleNextImage}
            aria-label='next image'
          >
            <Next />
          </button>
        </div>
      )}

      <div className={classes['switch-image']}>
        {images.map((image) => (
          <button
            className={classes['image-button']}
            key={image.id}
            onClick={() => setImageId(image.id)}
            aria-label='switch image'
          >
            <div
              className={classNames(classes['image-wrapper'], {
                [classes['active-image']]: image.id === imageId,
              })}
            >
              <Image src={image.src} alt={image.alt} fill />
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default ImageModal;

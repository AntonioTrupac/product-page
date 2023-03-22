import Image from 'next/image';
import classes from './ImageModal.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

  return (
    <>
      {mainImage && (
        <div className={classes['main-image-button']}>
          <Image src={mainImage.src} width={550} height={550} alt='' />
        </div>
      )}

      <div className={classes['switch-image']}>
        {images.map((image) => (
          <button
            className={classes['image-button']}
            key={image.id}
            onClick={() => setImageId(image.id)}
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

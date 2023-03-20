import Image from 'next/image';
import classes from './ImageModal.module.scss';
import { Close } from '../icons';
import { useState } from 'react';
import Modal from './Modal';

interface ImageModalProps {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const ImageModal = ({ images }: ImageModalProps) => {
  const [imageId, setImageId] = useState(images[0]?.id);

  const mainImage = images.find((image) => image.id === imageId);

  return (
    <>
      <button className={classes['close-button']}>
        <Close width={20} height={20} />
      </button>
      {mainImage && (
        <div className={classes['wrapper__main-image-button']}>
          <Image src={mainImage.src} width={445} height={445} alt='' />
        </div>
      )}
      <div className={classes['wrapper__switch-image']}>
        {images.map((image) => (
          <button
            className={classes['image-button']}
            key={image.id}
            onClick={() => setImageId(image.id)}
          >
            <Image
              className={image.id === imageId ? classes['active-image'] : ''}
              src={image.src}
              width={88}
              height={88}
              alt={image.alt}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ImageModal;

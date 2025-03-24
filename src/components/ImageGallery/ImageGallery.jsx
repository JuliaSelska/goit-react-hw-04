import ImageCard from './ImageCard';
import styles from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ pictures, onImageClick }) => {
    if (pictures.length === 0) return null;

    return (
        <ul className={styles.gallery}>
            {pictures.map((image) => (
                <li key={image.id} className={styles.galleryCard}>
                    <ImageCard image={image} onClick={onImageClick} className={styles.galleryImg} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;





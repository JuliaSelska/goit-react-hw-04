import ImageCard from './ImageCard';
import styles from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ pictures, onImageClick }) => {
    if (pictures.length === 0) return null;

    return (
        <ul className="gallery">
            {pictures.map((image) => (
                <li key={image.id} className={styles.imageCard}>
                    <ImageCard image={image} onClick={onImageClick} className={styles.galerryImag} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;





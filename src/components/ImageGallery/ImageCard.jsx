import styles from '../ImageGallery/ImageGallery.module.css'


const ImageCard = ({ image, onClick }) => {
    return (
        <div onClick={() => onClick(image)}>
            <img className={styles.galleryImg} src={image.urls.small} alt={image.alt_description} />
        </div>
    );
};

export default ImageCard;

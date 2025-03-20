import ImageCard from './ImageCard';

const ImageGallery = ({ pictures, onImageClick }) => {
    if (pictures.length === 0) return null;

    return (
        <ul className="gallery">
            {pictures.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;





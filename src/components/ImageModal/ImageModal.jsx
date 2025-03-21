import ReactModal from "react-modal";
import styles from '../ImageModal/ImageModal.module.css';


ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
    if (!isOpen || !image) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <button className={styles.closeBtn} onClick={onClose}>Close</button>
            <img src={image.urls.regular} alt={image.alt_description} />
            <p><strong>Author: </strong>{image.user.name}</p>
            <p><strong>Likes: </strong>{image.likes}</p>
            <p>{image.description || "No description available"}</p>
        </ReactModal>
    );
};

export default ImageModal;

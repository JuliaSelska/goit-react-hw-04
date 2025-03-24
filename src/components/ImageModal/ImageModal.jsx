import ReactModal from "react-modal";
import styles from '../ImageModal/ImageModal.module.css';


ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
    if (!isOpen || !image) return null;

    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <button className={styles.closeBtn} onClick={onClose}>X</button>
            <img className={styles.modalContentImg} src={image.urls.small} alt={image.alt_description} />
            {/* <p><strong className={styles.textInfo}>Author: </strong>{image.user.name}</p>
            <p><strong className={styles.imageInfo}>Likes: </strong>{image.likes}</p> */}
        </ReactModal>
    );
};

export default ImageModal;

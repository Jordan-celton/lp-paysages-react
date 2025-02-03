import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/ImageModal.css";

const ImageModal = ({ images, selectedImageIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

  // Fonctions pour naviguer entre les images
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Gérer les touches clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, nextImage, prevImage]);

  return (
    <div className="modal" aria-labelledby="image-modal" role="dialog">
      <button className="close" onClick={onClose} aria-label="Fermer la modale">
        &times;
      </button>
      <button
        className="prev"
        onClick={prevImage}
        aria-label="Image précédente"
      >
        &#10094;
      </button>
      <img
        className="modal-content"
        src={images[currentIndex]}
        alt={`Aperçu ${currentIndex + 1}`}
        aria-describedby="image-modal-description"
      />
      <button className="next" onClick={nextImage} aria-label="Image suivante">
        &#10095;
      </button>
    </div>
  );
};

// Validation des props
ImageModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;

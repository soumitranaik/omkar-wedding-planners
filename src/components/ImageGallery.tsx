"use client"

import { useState } from 'react';
import { BiCross } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your own
  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600",
      alt: "Wedding decoration with flowers",
      title: "Elegant Wedding Setup"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
      alt: "Catering service",
      title: "Gourmet Catering"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
      alt: "Event photography",
      title: "Professional Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
      alt: "Corporate event",
      title: "Corporate Event"
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
      alt: "Birthday party setup",
      title: "Birthday Celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600",
      alt: "Wedding cake",
      title: "Custom Wedding Cake"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      alt: "Event decoration",
      title: "Floral Arrangements"
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600",
      alt: "Outdoor event",
      title: "Outdoor Wedding"
    }
  ];

  const galleryImages = images.length > 0 ? images : sampleImages;

  const openModal = (image : any, index : number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyDown = (e : any) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 pt-16 pb-48" id='gallery'>
      {/* Gallery Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Gallery</h2>
        <p className="text-gray-600">Showcasing our finest work and memorable moments</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => openModal(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <BiCross size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FaArrowLeft size={40} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FaArrowRight size={40} />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-3 rounded-lg">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded cursor-pointer overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-80'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setSelectedImage(galleryImages[index]);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
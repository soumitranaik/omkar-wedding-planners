"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay, FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { FaX } from "react-icons/fa6";

const Gallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<{
    src?: string;
    alt: string;
    title: string;
    vidsrc?: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoref = useRef<HTMLVideoElement>(null);
  const [isVideoLoading, setVideoLoading] = useState(false);

  // Reset loading state when video source changes
  useEffect(() => {
    if (selectedImage?.vidsrc) {
      setVideoLoading(true);
    }
  }, [selectedImage?.vidsrc]);

  // Setup video event listeners
  useEffect(() => {
    const video = videoref.current;
    if (!video || !selectedImage?.vidsrc) return;

    const handleLoadStart = () => setVideoLoading(true);
    const handleCanPlay = () => setVideoLoading(false);
    const handleLoadedData = () => setVideoLoading(false);
    const handleWaiting = () => setVideoLoading(true);
    const handleError = () => setVideoLoading(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('error', handleError);
    };
  }, [selectedImage?.vidsrc]);

  // Sample images - replace with your own
  const sampleImages = [
    {
      src: "/images/gallery1.jpeg",
      alt: "Buffet Setup",
      title: "Buffet Setup",
    },
    {
      src: "/images/stage.jpeg",
      alt: "Stage & Backdrop",
      title: "Stage & Backdrop",
    },
    {
      src: "/images/buffet.jpg",
      alt: "Buffet Setup",
      title: "Buffet Setup",
    },
    {
      vidsrc: "/videos/full-wedding.mp4",
      alt: "Full Wedding Setup",
      title: "Full Wedding Setup",
    },
    {
      src: "/images/corporate.jpeg",
      alt: "Corporate Event",
      title: "Corporate Event",
    },
    {
      vidsrc: "/videos/full-wedding-setup.webm",
      alt: "Wedding Setup Video",
      title: "Wedding Setup Video",
    },
    {
      vidsrc: "/videos/buffet-setup.mp4",
      alt: "Buffet Setup Video",
      title: "Buffet Setup Video",
    },
    {
      vidsrc: "/videos/entrance-vidhi.webm",
      alt: "Entrance, Vidhi Mandap & Stage",
      title: "Entrance, Vidhi Mandap & Stage",
    },
    {
      src: "/images/buffet2.jpeg",
      alt: "Buffet Setup",
      title: "Buffet Setup",
    },
    {
      src: "/images/jatra.jpeg",
      alt: "Jatra",
      title: "Temple Decoration",
    },
    {
      src: "/images/puja.jpeg",
      alt: "Puja",
      title: "Puja Decoration",
    },
  ];

  const galleryImages = images.length > 0 ? images : sampleImages;
  const galleryImages8 = sampleImages.slice(0, 8);

  const openModal = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    // Don't set loading here - let the useEffect handle it
  };

  const closeModal = () => {
    setSelectedImage(null);
    setVideoLoading(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex] ?? null);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 pt-16 pb-48" id="gallery">
      {/* Gallery Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Gallery</h2>
        <p className="text-gray-600">
          Showcasing our finest work and memorable moments
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages8.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => openModal(image, index)}
          >
            {image.vidsrc ? (
              <video
                src={image.vidsrc}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <Image
                src={image.src ?? ""}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}

            {image.vidsrc && (
              <div className="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <FaPlay />
                </div>
              </div>
            )}
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
            <FaX size={32} />
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

          {/* Image/Video container */}
          <div
            className="relative max-w-8xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.vidsrc ? (
              <div className="relative">
                {/* Loading Spinner Overlay */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20 min-h-[400px] min-w-[300px]">
                    <div className="flex flex-col items-center space-y-4">
                      <FaSpinner className="animate-spin text-white text-6xl" />
                    </div>
                  </div>
                )}
                
                {/* Video Element */}
                <video
                  ref={videoref}
                  src={selectedImage.vidsrc}
                  className="h-[80vh] max-w-[480px] object-contain"
                  autoPlay
                  muted
                  controls
                  preload="metadata"
                />
              </div>
            ) : (
              <Image
                src={selectedImage.src ?? ""}
                alt={selectedImage.alt}
                width={750}
                height={750}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Image/Video info */}
            {!isVideoLoading && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pb-18 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-3 rounded-lg">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded cursor-pointer overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-80"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setSelectedImage(galleryImages[index]);
                }}
              >
                {image.vidsrc ? (
                  <video
                    src={image.vidsrc}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={image.src ?? ""}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
"use client"

import { serviceImage } from "@/app/api";
import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  alt: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = serviceImage.slice(0, 5); // Limiting to 5 images for the carousel.

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <Section
      title="Our Gallery"
      description="Dive into our collection of mehndi designs, inspired by timeless henna artistry. From intricate bridal motifs to modern Arabic styles, discover designs perfect for every celebration."
      classes=" p-10 "
    >
      {/* Carousel Section */}
      <div id="gallery-carousel" className="relative w-full mb-10" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out transition-opacity ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.img_url}
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={image.alt}
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Masonry Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          {serviceImage.slice(0, 3).map((image) => (
            <ImageCard key={image.alt} src={image.img_url} alt={image.alt} />
          ))}
        </div>
        {/* Column 2 */}
        <div className="grid gap-4">
          {serviceImage.slice(3, 6).map((image) => (
            <ImageCard key={image.alt} src={image.img_url} alt={image.alt} />
          ))}
        </div>
        {/* Column 3 */}
        <div className="grid gap-4">
          {serviceImage.slice(6, 9).map((image) => (
            <ImageCard key={image.alt} src={image.img_url} alt={image.alt} />
          ))}
        </div>
        {/* Column 4 */}
        <div className="grid gap-4">
          {serviceImage.slice(9, 12).map((image) => (
            <ImageCard key={image.alt} src={image.img_url} alt={image.alt} />
          ))}
        </div>
      </div>

      {/* Button to View More */}
      <div className="text-center mt-10">
        <Link href="/mehandi-design-gallery">
          <Button
            classes="inline-flex items-center px-8 py-3 text-orange-600 border border-orange-400 rounded-full bg-white hover:bg-orange-100 hover:text-orange-700 shadow-md"
            variant="outline"
            size="md"
          >
            See More
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
]; // Replace with your actual photo URLs

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    null
  );

  // Close modal function
  const closeModal = () => setSelectedImage(null);

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
      id="gallery"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary">
        Gallery of Previous Programs
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {photos.map((src, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery photo ${idx + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority={idx < 3}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for displaying selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-full max-h-full sm:max-w-3xl p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-4xl font-bold z-10 focus:outline-none"
                aria-label="Close modal"
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Selected Gallery"
                width={800}
                height={600}
                className="object-contain rounded-lg shadow-lg max-w-full max-h-[80vh]"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center mx-20 mt-8">
        <Button
          asChild
          className="w-full text-xl lg:text-3xl p-6 lg:p-10"
        >
          <Link href={""} className=" uppercase">
            Join the next train
          </Link>
        </Button>
      </div>
    </section>
  );
}

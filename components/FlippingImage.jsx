"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function FlippingImage({ imagePath, altText, sessionText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center relative">
      <div
        className={`card-container ${isFlipped ? "flipped" : ""}`}
        onClick={handleImageClick}
      >
        <Image
          src={imagePath}
          alt={altText}
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>
      {isFlipped && (
        <div className="absolute inset-0 rounded-md">
          <div className="absolute inset-0 flex items-end justify-center">
            <h2 className="text-white text-3xl font-bold pb-5">
              {sessionText}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

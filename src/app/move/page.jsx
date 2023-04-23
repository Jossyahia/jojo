"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);

  async function fetchMovie() {
    const res = await fetch(`https://newal.onrender.com/api`);
    const movieData = await res.json();
    setMovie(movieData);
    console.log(movieData);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <div className="w-80 h-48 relative">
          <Image
            src={movieData.image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          />
        </div>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movieData.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movieData.description}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {new Date(movieData.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieData.likes}
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useLoaderData, Link } from "react-router";

const MovieDetails = () => {
  const movie = useLoaderData();

  const removeHtmlTags = (html) => {
    if (!html) return "No description available.";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/movies" className="btn btn-outline btn-sm mb-6">← Back to Movies</Link>
      
      <div className="flex flex-col lg:flex-row bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 flex items-center justify-center">
          <img 
            src={movie.image?.original || movie.image?.medium} 
            alt={movie.name} 
            className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
          />
        </div>

        <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{movie.name}</h2>
          
          <p className="text-sm text-gray-700 mb-2">
            <strong>Rating:</strong> ⭐ {movie.rating?.average || "N/A"} | <strong>Release:</strong> {movie.premiered || "N/A"}
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            <strong>Genres:</strong> {movie.genres ? movie.genres.join(", ") : "N/A"}
          </p>
          
          <div className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
            <p>{removeHtmlTags(movie.summary)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
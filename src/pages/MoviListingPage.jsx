import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import MoviCard from "../components/MoviCard";

const MoviListingPage = () => {
  const movies = useLoaderData();
  const [shows, setShows] = useState(movies || []);
  const [search, setSearch] = useState("");
  //   console.log(search);

  useEffect(() => {
    if (!search.trim()) {
      setShows(movies || []);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`,
        );
        if (res.ok) {
          const data = await res.json();
          const formattedShows = data.map((m) => m.show);
          setShows(formattedShows);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const timer = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(timer);
  }, [search, movies]);
  //   const filterMOvies = movies
  //     ? movies.filter((movie) => {
  //         const match = movie.name.toLowerCase().includes(search.toLowerCase());
  //         return match;
  //       })
  //     : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Movie Listing</h1>
      <p className="mb-6 text-gray-500">
        Browse and search your favorite movies
      </p>
      <div className="mb-8">
        <input
          type="text"
          value={search}
          placeholder="🔍 Search for a movie... "
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {shows.length === 0 ? (
        <p>No found your search</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((movie) => (
            <MoviCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviListingPage;

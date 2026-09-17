import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> DISCOVER MOVIES </h1>
            <p className="mb-5">
              Explore and discover your favorite movies from around the world.
            </p>
            <Link to={"/movies"}>
              <button className="btn btn-primary"> Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hero min-h-[75vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">DISCOVER MOVIES</h1>
          <p className="py-6">
            Explore and discover your favorite movies and TV shows from around the world effortlessly.
          </p>
          <Link to="/movies" className="btn btn-primary">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
   */}
    </>
  );
};

export default Home;

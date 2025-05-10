import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="E-Mall"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4 md:px-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase mb-4 text-gray-200 drop-shadow-lg">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 max-w-xl mx-auto text-gray-300">
            Discover your perfect vacation outfit with fast, worldwide delivery and trendy styles.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

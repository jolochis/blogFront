import { Link } from "react-router-dom";
import { SearchPost } from "./SearchPost";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <Link to="/">
          <h1 className="text-5xl font-bold mb-6">Bienvenido a Nuestro Blog</h1>
        </Link>
        <p className="text-xl mb-12">
          Explora artículos y contenido interesante
        </p>
      </div>
      <SearchPost />
    </div>
  );
};

export default Hero;

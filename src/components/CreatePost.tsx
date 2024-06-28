import { Link } from "react-router-dom";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const CreatePost = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [contenido, setContenido] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date().toISOString();
      if (!titulo || !autor || !contenido) return;

      const data = {
        titulo,
        autor,
        contenido,
        fecha: date,
      };
      await createPost(data);
      navigate("/");
    } catch (error) {
      console.error("Error al enviar la entrada:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto py-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm mx-auto py-2"
      >
        <div className="mb-4">
          <label
            htmlFor="titulo"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm rounded-md p-2.5 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="autor"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Autor
          </label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={autor}
            onChange={(event) => setAutor(event.target.value)}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm rounded-md p-2.5 text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contenido"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Contenido
          </label>
          <textarea
            id="contenido"
            name="contenido"
            value={contenido}
            onChange={(event) => setContenido(event.target.value)}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm rounded-md p-2.5 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-3"
        >
          Crear Entrada
        </button>
      </form>
      <div className="flex justify-center">
        <Link
          to="/"
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-center"
        >
          Cancelar
        </Link>
      </div>
    </div>
  );
};

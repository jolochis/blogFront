import { Link, useParams } from "react-router-dom";
import { createPost, getPost, updatePost } from "../services/postService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntradaInterface } from "./interface/EntradaInterface";

export const CreatePost = () => {
  const { postId } = useParams<{ postId: string }>();
  const parsedPostId = parseInt(postId as string, 10);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [contenido, setContenido] = useState("");

  const navigate = useNavigate();
  const text = postId ? "Editar" : "Crear";
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const date = new Date().toISOString();
      if (!titulo || !autor || !contenido) return;

      const data: EntradaInterface = {
        titulo,
        autor,
        contenido,
        fecha: new Date(date),
      };
      if (postId) {
        await updatePost(parsedPostId, data);

        toast.info("Entrada editada exitosamente", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        await createPost(data);
        toast.success("Entrada creada exitosamente", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.success("Error al enviar la entrada:", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        const post = await getPost(parsedPostId);
        setTitulo(post.titulo);
        setAutor(post.autor);
        setContenido(post.contenido);
      };
      fetchPost();
    }
  }, [postId]);

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto py-2">
      <ToastContainer />
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
          {text} Entrada
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

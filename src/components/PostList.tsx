import { useContext, useEffect, useState } from "react";
import { deletePost, getPosts } from "../services/postService";
import { SearchContext } from "../context/searchContext";
import { Modal } from "./commons/Modal";
import { Link } from "react-router-dom";
import moment from "moment";

export const PostList = () => {
  const [post, setPost] = useState([] as any[]);
  const context = useContext(SearchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { searchResults } = context;

  const handleOpenModal = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const handleDelete = async () => {
    await deletePost(itemToDelete);
    console.log(`Eliminando el elemento con ID ${itemToDelete}`);
    const updatedPosts = await getPosts();
    setPost(updatedPosts);
    handleCloseModal();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPost(allPosts);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    setPost(searchResults);
  }, [searchResults]);
  return (
    <div>
      <div className="container mx-auto px-5 py-4 flex justify-center">
        <Link
          to="/crear-entrada"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4 inline-block"
        >
          Crear Entrada
        </Link>
      </div>

      <section className="text-gray-600 body-font flex">
        {post.length > 0 ? (
          <div className="container px-5 py-24 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {post.map((item) => (
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col text-center mb-8"
                  key={item.id}
                >
                  <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.titulo}
                    </h1>
                    <p className="text-xl text-gray-800 mb-2">
                      <span className="font-semibold">Por:</span> {item.autor}
                    </p>

                    {item.contenido.length > 70 ? (
                      <p className="text-lg text-gray-800 mb-4">{`${item.contenido.substring(
                        0,
                        70
                      )}...`}</p>
                    ) : (
                      <p className="text-lg text-gray-800 mb-4">
                        {item.contenido}
                      </p>
                    )}

                    <p className="text-lg text-gray-800">
                      <span className="font-semibold">Añadido:</span>{" "}
                      {moment(item.fecha).format("LL")}
                    </p>
                  </div>
                  <div className="mt-auto p-4 bg-gray-100">
                    <div className="flex justify-center">
                      <Link
                        to={`/post/${item.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-2"
                      >
                        Ver
                      </Link>
                      <button
                        onClick={() => handleOpenModal(item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full"
                      >
                        Eliminar
                      </button>
                      <Modal
                        isOpen={isModalOpen}
                        closeModal={handleCloseModal}
                        handleDelete={handleDelete}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto text-center py-2">
            <p className="text-xl text-gray-800 text-center py-2 mx-auto ml-5">
              No se han encontrado entradas recientes
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

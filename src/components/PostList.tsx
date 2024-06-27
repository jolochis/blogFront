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
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col text-center mb-8 py-4"
                  key={item.id}
                >
                  <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                    {item.titulo}
                  </h1>

                  {item.contenido.length > 70 ? (
                    <p className="text-xl text-gray-800 px-6">
                      {`${item.contenido.substring(0, 70)}...`}
                    </p>
                  ) : (
                    <p className="text-xl text-gray-800">{item.contenido}</p>
                  )}

                  <p className="text-xl text-gray-800 mt-auto mb-4">
                    <span className="font-bold">Añadido: </span>
                    {moment(item.fecha).format("LL")}
                  </p>
                  <div className="flex justify-center items-center mt-auto">
                    <Link
                      to={`/post/${item.id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                    >
                      Ver
                    </Link>
                    <button
                      onClick={() => handleOpenModal(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
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

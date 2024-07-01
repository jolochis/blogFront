import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { getPost } from "../services/postService";
import { EntradaInterface } from "./interface/EntradaInterface";

export const PostDetail = () => {
  const [postDetails, setPostDetails] = useState<EntradaInterface>();
  const { postId } = useParams<{ postId: string }>();
  const parsedPostId = parseInt(postId as string, 10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPost(parsedPostId);
      setPostDetails(res);
    };
    fetchPosts();
  }, []);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col text-center mb-8 py-4">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
        {postDetails?.titulo}
      </h1>

      <p className="text-xl text-gray-800 p-2 m-2">
        <span className="font-bold">Por:</span> {postDetails?.autor}
      </p>
      <p className="text-xl text-gray-800 p-2 m-2">
        {postDetails?.contenido}
      </p>

      <p className="text-xl text-gray-800 mt-auto mb-4">
        {moment(postDetails?.fecha).format("LL")}
      </p>

      <div className="flex justify-center items-center mt-auto">
        <Link
          to={`/editar/${postDetails?.id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Editar
        </Link>
      </div>
    </div>
  );
};

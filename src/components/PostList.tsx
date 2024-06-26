import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

export const PostList = () => {
  const [post, setPost] = useState([] as any[]);

  useEffect(() => {
    (async () => {
      const allPosts = await getPosts();
      setPost(allPosts);
    })();
  }, []);

  return (
    /*  <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            titulo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            contenido
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fecha:</p>
        </div>
      </div>
    </section> */
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          {post &&
            post.map((item) => {
              return (
                <div key={item.id}>
                  <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                    {item.titulo}
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    contenido
                  </p>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Fecha:
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

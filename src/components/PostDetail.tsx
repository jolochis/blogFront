import React from "react";

const PostDetail = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            Titulo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            contenido
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fecha:</p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;

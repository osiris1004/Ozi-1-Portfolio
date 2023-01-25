import React, { useState } from "react";
import { BlogForm } from "../../components/BlogForm/BlogForm";
import { Modal } from "../../components/Modal/Modal";
import { Nav } from "../../components/BoardComponents/nav/Nav";

export const Board = () => {
  const [displayForm, setDisplayForm] = useState(false)
    const handleFormVisibility = () =>{
      setDisplayForm(true)
    }
    const close = () =>{
      setDisplayForm(false)
    }
  return (
    <section>
      <Modal isDisplay={displayForm} close={close}>
        <BlogForm />
      </Modal>
      <Nav>
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFormVisibility}
          >
            Add new post
          </button>
        </div>
      </Nav>

      <div className="flex flex-wrap justify-center gap-10 w-3/5 m-auto x-sm:w-full">
        <div className="flex w-[400px] border">
          <div
            className="lg:h-auto w-48  bg-cover rounded-t "
            style={{ backgroundColor: "green" }}
          ></div>
          <div className=" border-gray-400  bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Cathegory
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Can coffee make you a better developer?
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>

              <div className="w-full flex justify-end gap-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {" "}
                  update
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {" "}
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

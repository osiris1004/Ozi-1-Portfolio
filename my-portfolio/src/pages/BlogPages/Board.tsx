import React, { useEffect, useState } from "react";
import { BlogForm } from "../../components/BlogForm/BlogForm";
import { Modal } from "../../components/Modal/Modal";
import { Nav } from "../../components/BoardComponents/nav/Nav";
import BlogService from "../../service/Blog.service";
import { Blog } from "../../model/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLayerGroup } from "@fortawesome/free-solid-svg-icons";



export const Board = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [blogsById, setBlogsById] = useState<Blog | null>(null);

  useEffect(() => {
    (async () => {
      const data = await BlogService.get();
      setBlogs(data);
    })();
  }, [refresh]);
  console.log(blogs)


const handleRemove = async(id: string) =>  {
  await BlogService.remove(id);
  setRefresh(!refresh)
  };

  const handleUpdateButton = async(id: string) =>  {
        const data = await BlogService.getByID(id)
      setBlogsById(data)
      setDisplayForm(true)
};

  //  useEffect(() => {
  //    (async () => {
  //      const data = await BlogService.add({
  //       title: "2",
  //       content: "1",
  //      });
  //      setBlogsById(data)
  //    })();
  //  }, []);
  // console.log(blogsById);



  //  useEffect(()=>{
  //   (async()=>{
  //    const data = await BlogService.getByID('63d43a1c206f5eb7388088c6')
  //    setBlogsById(data)
  //   })()
  //  },[])
  //  console.log(blogsById);

  //  useEffect(() => {
  //    (async () => {
  //      const data = await BlogService.update("63d43a1c206f5eb7388088c6", {
  //       title: "1",
  //       content: "1",
  //      });
  //      setBlogsById(data)
  //    })();
  //  }, []);
  // console.log(blogsById);

  // useEffect(() => {
  //   (async () => {
  //     const data = await BlogService.remove("63aa1a8c47a1b2f9b50bb5d8");
  //     setBlogsById(data);
  //   })();
  // }, []);
  // console.log(blogsById);

  const handleFormVisibility = () => {
    setDisplayForm(true);
  };
  const close = () => {
    setDisplayForm(false);
    setBlogsById(null)
  };
  return (
    <section>
      <Modal isDisplay={displayForm} close={close}>
        <BlogForm blog={blogsById} setRefresh={setRefresh} refresh={refresh} close={close}/>
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

      {blogs &&
        blogs.length > 0 &&
        blogs.map((item, index) => (
          <section
            className="flex flex-wrap justify-center gap-10 w-3/5 m-auto x-sm:w-full"
            key={index}
          >
            <div className="flex w-[400px] border">
              <div
                className="lg:h-auto w-48  bg-cover rounded-t "
                style={{ backgroundColor: "green" }}
              ></div>
              <div className=" border-gray-400  bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                    />
                    {item.categoryId}
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {item.content}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    
                  <p className="text-gray-900 leading-none">
                      {item.createdAt && (item.createdAt.toString())}
                    </p>
                    <p className="text-gray-900 leading-none">
                      {item.updateAt && (item.updateAt.toString())}
                    </p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>

                  <div className="w-full flex justify-end gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleUpdateButton(item.id)}>
                      {" "}
                      update
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleRemove(item.id)}>
                      {" "}
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </section>
  );
};

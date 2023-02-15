import React, { useEffect, useState } from "react";
import { BlogForm } from "../../components/BlogForm/BlogForm";
import { Modal } from "../../components/Modal/Modal";
import { Nav } from "../../components/BoardComponents/nav/Nav";
import BlogService from "../../service/Blog.service";
import { Blog } from "../../model/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/LOGO.png";
import   styled   from 'styled-components';
import   tw  from 'twin.macro';
import { flexbox } from "@mui/system";


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
    <section className="bg-gray-200 h-full">
      <Modal isDisplay={displayForm} close={close}>
        <BlogForm
          blog={blogsById}
          setRefresh={setRefresh}
          refresh={refresh}
          close={close}
        />
      </Modal>
      <div className="py-7">
      <Nav>
        <div className="w-full flex justify-center">
          <Btn bgHoverColor="lightblue" bgColor="none" onClick={handleFormVisibility}>
            <p>Add new post</p>
          </Btn>
        </div>
      </Nav>
      </div>
      <CardContainer>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((item, index) => (
            <Card key={index}>
              <div></div>
              <div>
                <DataSection>
                  <div>
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                    />
                    <p>{item.categoryId}</p>
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p>{item.content}</p>
                  </div>
                  <div>
                    <Footer>
                      <div>
                        <img
                          className="w-10 h-10 rounded-full mr-4"
                          src={logo}
                          alt="Avatar of Jonathan Reinink"
                        />
                        <div>
                          <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                          <p>{new Date(item.updateAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div>
                        <Btn onClick={() => handleUpdateButton(item.id)}>
                          <p>update</p>
                        </Btn>
                        <Btn
                          bgColor="red"
                          onClick={() => handleRemove(item.id)}
                        >
                          <p>delete</p>
                        </Btn>
                      </div>
                    </Footer>
                  </div>
                </DataSection>
              </div>
            </Card>
          ))}
      </CardContainer>
    </section>
  );
};

const CardContainer = styled.div`
${tw` 
//border-2  
flex flex-wrap justify-center gap-5 sm:w-[80%] m-auto`}
`
const Card = styled.div`
${tw`   
border-gray-400  border-[1px] 
rounded-md
w-96 sm:w-5/12  flex [> div:nth-child(1)]:(basis-3/12 bg-red-200 )
[> div:nth-child(2)]:(basis-full bg-white)
`}
`
const DataSection = styled.div`
${tw`  //border-2 border-black  
flex flex-col gap-y-3 p-3 
 [>div]:(/*border border-black */)
[> div:nth-child(1)]:(flex items-center text-gray-500)
[> div:nth-child(2)]:(text-gray-900 font-bold text-xl)
[> div:nth-child(3)]:(text-gray-700 text-base)
`}
`
const Footer =styled.div`
${tw`  flex flex-wrap p-3 py-4 gap-y-3
[> div:nth-child(1)]:(flex mr-auto)
[> div:nth-child(2)]:(flex gap-x-2 items-center)
`}
`

interface Ip{
  bgColor? :string
  bgHoverColor? :string
  fontColor?:string
}
const Btn = styled.button<Ip>`
${tw`  rounded-xl  font-medium h-10
  [> p]:(flex items-center px-4 border-amber-500)
`}
background-color: ${({bgColor}) => bgColor};
${({bgColor}) => bgColor ?`&:hover { background: ${bgColor}; color:black }` : tw`bg-blue-200` };
${({bgHoverColor}) => bgHoverColor ? `&:hover { background: ${bgHoverColor} }` : ''};

`

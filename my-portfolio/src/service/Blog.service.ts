import { Blog } from "../model/Blog"

const getUrl = 'http://localhost:8000/Blog/'

const getAll = async () =>{

    return await fetch(getUrl)
            .then((res) => res.json())
            .then((data) => {
                try{
                    if(data.page === 'Error response'){
                        throw data.page;
                    }else{
                        return data.map((item: any)=>new Blog(item))
                    }
                }catch(error){
                    console.log(error)
                }
            })
            .catch((error) => error)

}

const getByID = async (id:string) =>{

    return await fetch(getUrl+id)
            .then((res) => res.json())
            .then((data) => {
                try{
                    if(data.page === 'Error response'){
                        throw data.page;
                    }else{
                        return new Blog(data)
                    }
                }catch(error){
                    console.log(error)
                }
            })
            .catch((error) => error)

}

type BlogHttpContent = {
    bodyBlog: {
        "content" : string
    },
    categoryId : string
}

const update = async (id:string, body:BlogHttpContent) =>{
    return await fetch(getUrl+id,
        {
            method :'PATCH',
            body : JSON.stringify(body),
           headers : {
            'Content-Type': 'application/json; charset=utf-8'
           }
        }
    
        )
            .then((res) => res.json())
            .then((data) => {
                try{
                    if(data.page === 'Error response'){
                        throw data.page;
                    }else{
                         return new Blog(data)
                    }
                }catch(error){
                    console.log(error)
                }
            })
            .catch((error) => error)

}

const remove = async (id:string) =>{

    return await fetch(getUrl+id,
        {
            method :'DELETE',
        }
        )
            .then((res) => res.json())
            .then((data) => {
                try{
                    if(data.page === 'Error response'){
                        throw data.page;
                    }else{
                         return new Blog(data)
                    }
                }catch(error){
                    console.log(error)
                }
            })
            .catch((error) => error)

}

export default {
    getAll,
    getByID,
    update,
    remove
}
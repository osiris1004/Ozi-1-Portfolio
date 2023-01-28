import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ControlledTextField } from './Field/ControlledTextField';
import { Button } from '@mui/material';
import BlogService from '../../service/Blog.service';
import { Blog } from '../../model/Blog';

interface Iprop{
  blog: Blog | null
  setRefresh : (setValue:boolean)=>void,
  refresh: boolean,
  close : ()=>void,
}

export const BlogForm = ({blog, setRefresh, refresh, close}:Iprop) => {
    const { handleSubmit, control, setValue ,formState, reset} = useForm();


    useEffect(()=>{
      if(blog){
        setValue('title', blog.title)
        setValue('content', blog.content)
        setValue('categoryId', blog.categoryId)
        //setValue('title', blog.title)
      }
    },[blog, setValue])

    const onSubmit = async(data : any)=>{
      //console.log(data)
          if (blog) {
            await BlogService.update(blog.id, data);
            setRefresh(!refresh);
            close();
          } else {
            await BlogService.add(data);
            setRefresh(!refresh);
            close();
          }
        reset()
    }
   
    const onErrors = (errors: any) => {
      console.error(errors)
    }




//flex flex-col w-2/4 m-auto border gap-5
  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)} className='bg-white flex flex-col  w-1/2 m-auto'>
      <h1>Add New post</h1>
      <ControlledTextField
        control={control}
        name="title"
        label="title"
        formState={formState}
        rules={{
          required: "Required",
        }}
      />
      <ControlledTextField
        control={control}
        name="content"
        label="content"
        formState={formState}
        rules={{
          required: "Required",
        }}
      />
      <ControlledTextField
        control={control}
        name="categoryId"
        label="categoryId"
        formState={formState}
        rules={{
          required: "Required",
        }}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onSubmit={handleSubmit(onSubmit, onErrors)}
      >
        Add new post
      </button>
    </form>
  );
}
 
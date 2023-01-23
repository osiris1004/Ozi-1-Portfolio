import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ControlledTextField } from './Field/ControlledTextField';
import { Button } from '@mui/material';


export const BlogForm = () => {
    const { handleSubmit, control, formState} = useForm();
    const onSubmit = (data : any)=>{
        console.log(data)
    }
   
    const onErrors = (errors: any) => {
      console.error(errors)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)} className='flex  border h-screen'>
      <div className='flex flex-col w-2/4 m-auto border gap-5' >
      <h1>Add New post</h1>
      <ControlledTextField
        control={control}
        name="name"
        label="name"
        formState={formState}
        rules={{
          required: "Required",
        }}
      />
      <ControlledTextField
        control={control}
        name="name"
        label="name"
        formState={formState}
        rules={{
          required: "Required",
        }}
      />
      <ControlledTextField
        control={control}
        name="name"
        label="name"
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
      </div>
    </form>
  );
}
 
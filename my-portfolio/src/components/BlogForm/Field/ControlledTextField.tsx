import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Control, Controller, FieldValues, FormState} from "react-hook-form";

interface Icomp{
    control : Control<FieldValues>,
    name : string,
    label : string,
    rules?: any
    formState: FormState<FieldValues>
    defaultValue? : string
    
}


export const ControlledTextField = (props:Icomp) => {

  let error_ : any
  if(props.formState){
    error_ = props.formState.errors[props.name]?.message
  }

  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={props.rules}
      defaultValue={props.defaultValue ? props.defaultValue : ''}
      render={({field})=>(
        <>
           <TextField label={props.label}  value={field.value} onChange={field.onChange} error={!!error_} helperText = {error_}/>
          
           
        </>
       
      )}
    />
  );
};

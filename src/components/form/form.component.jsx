import React from "react";
import { useForm } from "react-hook-form";

import "./form.styles.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("example"));

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-title'>Please Fill In Your Details</div>
      <div className='form-inputs'>
        <div className='inputs-container'>
          {/* First Name */}
          <div className='label'>First Name</div>
          <input
            className='input'
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p className='message'>This field is required</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p className='message'>First name cannot exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className='message'>Alphabetical characters only</p>
          )}

          {/* Last Name */}
          <div className='label'>Last Name</div>
          <input
            className='input'
            {...register("lastName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.lastName?.type === "required" && (
            <p className='message'>This field is required</p>
          )}
          {errors?.lastName?.type === "maxLength" && (
            <p className='message'>First name cannot exceed 20 characters</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p className='message'>Alphabetical characters only</p>
          )}

          <input className='button' type='submit' />
        </div>
      </div>
    </form>
  );
};

export default Form;

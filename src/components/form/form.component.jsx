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
            placeholder='Your First Name'
            required
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
            placeholder='Your Last Name'
            required
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
            <p className='message'>lAST name cannot exceed 20 characters</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p className='message'>Alphabetical characters only</p>
          )}

          {/* Email */}
          <div className='label'>Email</div>
          <input
            className='input'
            type='text'
            placeholder='xxx@xxx.xxx'
            required
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className='message'>This field is required</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className='message'>Please enter valid email address</p>
          )}

          {/* Phone Number */}
          <div className='label'>Phone Number</div>
          <input
            className='input'
            type='tel'
            placeholder='021 12345'
            required
            {...register("phoneNum", {
              required: true,
              minLength: 6,
              maxLength: 12,
              pattern: /^[0-9]+$/,
            })}
          />
          {errors?.phoneNum?.type === "required" && (
            <p className='message'>This field is required</p>
          )}
          {errors?.phoneNum?.type === "maxLength" && (
            <p className='message'>Phone number cannot exceed 12 numbers</p>
          )}
          {errors?.phoneNum?.type === "minLength" && (
            <p className='message'>Phone number cannot less than 6 numbers</p>
          )}
          {errors?.phoneNum?.type === "pattern" && (
            <p className='message'>Phone number only contains numbers</p>
          )}

          {/* Date of Birth */}
          <div className='label'>Date of Birth</div>
          <input
            className='input'
            type='text'
            placeholder='1999-12-31'
            required
            {...register("dob", {
              required: true,
            })}
          />
          {errors?.dob?.type === "required" && (
            <p className='message'>This field is required</p>
          )}

          {/* Comments */}
          <div className='label'>Comments</div>
          <textarea
            className='input textarea'
            rows='6'
            placeholder='Please enter your comments here...'
          />

          <input className='button' type='submit' />
          <input className='button' type='reset' />
        </div>
      </div>
    </form>
  );
};

export default Form;

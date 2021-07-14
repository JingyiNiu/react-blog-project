import React, { useState, useEffect } from "react";
import Input from "../input/input.component";

import "./form-copy.styles.css";

const FormCopy = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleFirstName = (e) => {
    const fname = e.target.value;
    setFirstName(fname);
  };

  const handleLastName = (e) => {
    const lname = e.target.value;
    setLastName(lname);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handleDob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };

  console.log("firstName: " + firstName);
  console.log("lastName: " + lastName);
  console.log("email: " + email);
  console.log("phone: " + phone);
  console.log("dob: " + dob);

  return (
    <div className='form'>
      <div className='form-title'>Please Fill In Your Details</div>
      <div className='inputs'>
        <Input
          text='First Name'
          placeholder='Your first name'
          inputType='text'
          isCorrect={true}
          errorMsg='please enter valid first name'
          onChange={handleFirstName}
        />
        <Input
          text='Last Name'
          placeholder='Your last name'
          inputType='text'
          isCorrect={true}
          errorMsg='please enter valid last name'
          onChange={handleLastName}
        />
        <Input
          text='Email'
          placeholder='xxx@xxx.xxx'
          inputType='email'
          isCorrect={false}
          errorMsg='please enter valid email'
          onChange={handleEmail}
        />
        <Input
          text='Phone Number'
          placeholder='021 12345'
          inputType='tel'
          isCorrect={true}
          errorMsg='please enter valid phone number'
          onChange={handlePhone}
        />
        <Input
          text='Date of Birth'
          inputType='date'
          isCorrect={false}
          errorMsg='please choose valid date'
          onChange={handleDob}
        />
        <div className='input-container'>
          <div className='input-label'>Comments</div>
          <textarea
            name='comments'
            className='input textarea'
            placeholder='Enter your comments here...'
          />
        </div>
        <div className='button'>Submit</div>
        <div className='button btn-gray'>Back</div>
      </div>
    </div>
  );
};

export default FormCopy;

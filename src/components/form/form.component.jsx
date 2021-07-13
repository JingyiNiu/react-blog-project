import React, { Component } from "react";
import Input from "../input/input.component";

import "./form.styles.css";

export class Form extends Component {
  render() {
    return (
      <div className='form'>
        <div className='form-title'>Please fill in your details</div>
        <div className='inputs'>
          <Input
            text='First Name'
            placeholder='Your first name'
            inputType='text'
          />
          <Input
            text='Last Name'
            placeholder='Your last name'
            inputType='text'
          />
          <Input text='Email' placeholder='xxx@xxx.xxx' inputType='email' />
          <Input
            text='Phone Number'
            placeholder='021 12345'
            inputType='number'
          />
          <Input text='Date of Birth' inputType='date' />
          <div className='input'>
            <div className='input-label'>Comments</div>
            <textarea
              name='comments'
              className='input-row textarea'
              placeholder='Enter your comments here...'
            />
          </div>
          <div className='button'>Submit</div>
          <div className='button btn-gray'>Back</div>
        </div>
      </div>
    );
  }
}

export default Form;

import React, { useState } from 'react';
import HelperText from './HelperText';

export const FeedbackOptions = ({ id, onChangeFunction }) => {
  return (
    <ul className='radio_inputs'>
      <li>
        <input type="radio" name={id} value="Excellent" id={id} onChange={onChangeFunction} />
        <label htmlFor="Excellent">Excellent</label>
      </li>
      <li>
        <input type="radio" value="Good" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Good">Good</label>
      </li>
      <li>
        <input type="radio" value="Fair" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Fair">Fair</label>
      </li>
      <li>
        <input type="radio" value="Bad" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Bad">Bad</label>
      </li>
    </ul>
  );
}

const FormTab = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: null,
    feedback_host: null,
    feedback_food: null,
    feedback_clean: null,
    feedback_final: null,
  })

  // const { email, phone } = formData

  // const [error, setError] = useState({
  //   errorId: "",
  //   errorFlag: false,
  // })

  // const { errorId, errorFlag} = error;

  // const formValidator = () => {
  //   if(Object.keys(formData).length === 0){
  //     setError();
  //   }
  //   else if(email==="" || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)))
  //     setError(true)
  // }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleForm = (e) => {
    e.preventDefault();
    const initialFormData = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : [];
    const newValue = [...initialFormData, { ...formData }];
    localStorage.setItem("formData", JSON.stringify(newValue));
  }

  return (
    <div className='form_component'>
      <h1>Aromatic Bar</h1>
      <h3>
        We are committed to providing you with the best
        dining experience possible, so we welcome your comments. Please fill
        out this questionnaire. Thank you.
      </h3>
      <div className="form">
        <form onSubmit={handleForm} method="post">
          <div className="user_details">
            <div>
              <label htmlFor="name">Customer Name<span>{' '}*</span></label>
              <input required type="text" name='name' id='name' placeholder="Enter Your Name" onChange={handleInputChange} />
              <HelperText id={"name"} />
            </div>
            <div>
              <label htmlFor="email">Email<span>{' '}*</span></label>
              <input required type="email" name='email' id='email' placeholder="Enter Your Mail ID" onChange={handleInputChange} />
              <HelperText text={"Incorrect Mail Id!"} />
            </div>
            <div>
              <label htmlFor="phone">Phone No.<span>{' '}*</span></label>
              <input required type="number" name='phone' id='phone' placeholder="Enter Your Phone Number" onChange={handleInputChange} />
              <HelperText id={"phone"} />
            </div>
          </div>
          <div className='feedback'>
            <div>
              <label htmlFor="feedback_host">Please rate the quality of the service you received from your host.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_host"} onChangeFunction={handleInputChange} />
              <HelperText text={"Please provide feedback!"} />
            </div>
            <div>
              <label htmlFor="feedback_food">Please rate the quality of your beverage.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_food"} onChangeFunction={handleInputChange} />
              <HelperText text={"Please provide feedback!"} />
            </div>
            <div>
              <label htmlFor="feedback_clean">Was our restaurant clean?<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_clean"} onChangeFunction={handleInputChange} />
              <HelperText text={"Please provide feedback!"} />
            </div>
            <div>
              <label htmlFor="feedback_final">Please rate your overall dining experience.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_final"} onChangeFunction={handleInputChange} />
              <HelperText text={"Please provide feedback!"} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormTab
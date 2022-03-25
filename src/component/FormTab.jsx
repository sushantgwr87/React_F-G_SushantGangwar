import React, { useState, useEffect, useRef } from 'react';
import toast from './Toast';

export const FeedbackOptions = ({ id, onChangeFunction }) => {
  return (
    <ul className='radio_inputs'>
      <li>
        <input required type="radio" name={id} value="Excellent" id={id} onChange={onChangeFunction} />
        <label htmlFor="Excellent">Excellent</label>
      </li>
      <li>
        <input required type="radio" value="Good" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Good">Good</label>
      </li>
      <li>
        <input required type="radio" value="Fair" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Fair">Fair</label>
      </li>
      <li>
        <input required type="radio" value="Bad" name={id} id={id} onChange={onChangeFunction} />
        <label htmlFor="Bad">Bad</label>
      </li>
    </ul>
  );
}

const FormTab = () => {

  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: null,
    feedback_host: null,
    feedback_food: null,
    feedback_clean: null,
    feedback_final: null,
  })

  const { email, phone } = formData

  const [error, setError] = useState({
    errorId: "",
    errorFlag: false,
    emptyField: false,
    message: ""
  })

  const { errorId, errorFlag, emptyField, message } = error;

  function isObjectEmpty() {
    for (var key in formData) {
      if (formData[key] === null || formData[key] === "")
        return {
          empty: true,
          id: key
        };
    }
    return {
      empty: false
    };
  }

  const formValidator = () => {
    const check = isObjectEmpty();
    if (check.empty) {
      setError({
        errorId: check.id,
        errorFlag: true,
        emptyField: true,
        message: `Please Fill ${check.id}`
      });
    }
    else if (!(/^[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/gm.test(email))) {
      setError({
        errorId: "email",
        errorFlag: true,
        emptyField: false,
        message: "Invalid Email ID"
      })
    }
    else if (phone.length !== 10) {
      setError({
        errorId: "phone",
        errorFlag: true,
        emptyField: false,
        message: "Invalid Phone Number! It must be only 10 Digits"
      })
    }
    else {
      setError({
        errorId: "",
        errorFlag: false,
        emptyField: false,
        message: ""
      })
    }
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (errorFlag || emptyField) {
      toast({ type: "error", message: emptyField ? `Please Fill the ${errorId}` : `Invalid ${errorId} Input` });
    }
    else {
      const initialFormData = localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : [];
      const newValue = [...initialFormData, { ...formData }];
      localStorage.setItem("formData", JSON.stringify(newValue));
      toast({ type: "success", message: "Data Submitted" });
      formRef.current.reset();
    }
  }

  useEffect(() => {
    formValidator();
  }, [formData]);

  return (
    <div className='form_component'>
      <h1>Aromatic Bar</h1>
      <h3>
        We are committed to providing you with the best
        dining experience possible, so we welcome your comments. Please fill
        out this questionnaire. Thank you.
      </h3>
      <div className="form">
        <form onSubmit={handleForm} ref={formRef} method="post">
          <div className="user_details">
            <div className={`${errorFlag && errorId === "name" && "error"}`}>
              <label htmlFor="name">Customer Name<span>{' '}*</span></label>
              <input required type="text" name='name' id='name' placeholder="Enter Your Name" onChange={handleInputChange} />
              {errorFlag && errorId === "name" && (
                <p>{message}</p>
              )}
            </div>
            <div className={`${errorFlag && errorId === "email" && "error"}`}>
              <label htmlFor="email">Email<span>{' '}*</span></label>
              <input required type="email" name='email' id='email' placeholder="Enter Your Mail ID" onChange={handleInputChange} />
              {errorFlag && errorId === "email" && (
                <p>{message}</p>
              )}
            </div>
            <div className={`${errorFlag && errorId === "phone" && "error"}`}>
              <label htmlFor="phone">Phone No.<span>{' '}*</span></label>
              <input required type="number" name='phone' id='phone' placeholder="Enter Your Phone Number" onChange={handleInputChange} />
              {errorFlag && errorId === "phone" && (
                <p>{message}</p>
              )}
            </div>
          </div>
          <div className='feedback'>
            <div>
              <label htmlFor="feedback_host">Please rate the quality of the service you received from your host.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_host"} onChangeFunction={handleInputChange} />
            </div>
            <div>
              <label htmlFor="feedback_food">Please rate the quality of your beverage.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_food"} onChangeFunction={handleInputChange} />
            </div>
            <div>
              <label htmlFor="feedback_clean">Was our restaurant clean?<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_clean"} onChangeFunction={handleInputChange} />
            </div>
            <div>
              <label htmlFor="feedback_final">Please rate your overall dining experience.<span>{' '}*</span></label>
              <FeedbackOptions id={"feedback_final"} onChangeFunction={handleInputChange} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormTab
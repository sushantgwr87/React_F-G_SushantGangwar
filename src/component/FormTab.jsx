import React from 'react'

export const FeedbackOptions = ({ id }) => {
  return (
    <ul className='radio_inputs'>
      <li>
        <input type="radio" name={id} id={id} />
        <label htmlFor="Excellent">Excellent</label>
      </li>
      <li>
        <input type="radio" name={id} id={id} />
        <label htmlFor="Good">Good</label>
      </li>
      <li>
        <input type="radio" name={id} id={id} />
        <label htmlFor="Fair">Fair</label>
      </li>
      <li>
        <input type="radio" name={id} id={id} />
        <label htmlFor="Bad">Bad</label>
      </li>
    </ul>
  );
}

export const HelperText = () => {
  return(
    <p>
      
    </p>
  );
}

const FormTab = () => {
  return (
    <div className='form_component'>
      <h1>Aromatic Bar</h1>
      <h3>
        We are committed to providing you with the best
        dining experience possible, so we welcome your comments. Please fill
        out this questionnaire. Thank you.
      </h3>
      <div className="form">
        <form action="" method="post">
          <div className="user_details">
            <div>
              <label htmlFor="name">Customer Name</label>
              <input type="text" name='name' id='name' placeholder="Enter Your Name" />
              <p>Helper Text</p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' placeholder="Enter Your Mail ID" />
              <p>Helper Text</p>
            </div>
            <div>
              <label htmlFor="phone">Phone No.</label>
              <input type="number" name='phone' id='phone' placeholder="Enter Your Phone Number" />
              <p>Helper Text</p>
            </div>
          </div>
          <div className='feedback'>
            <div>
              <label htmlFor="feedback_host">Please rate the quality of the service you received from your host.</label>
              <FeedbackOptions id={"feedback_host"} />
              <p>Helper Text</p>
            </div>
            <div>
              <label htmlFor="feedback_food">Please rate the quality of your beverage.</label>
              <FeedbackOptions id={"feedback_food"} />
              <p>Helper Text</p>
            </div>
            <div>
              <label htmlFor="feedback_clean">Was our restaurant clean?</label>
              <FeedbackOptions id={"feedback_clean"} />
              <p>Helper Text</p>
            </div>
            <div>
              <label htmlFor="feedback_final">Please rate your overall dining experience.</label>
              <FeedbackOptions id={"feedback_final"} />
              <p>Helper Text</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormTab
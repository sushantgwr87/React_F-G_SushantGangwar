# Aromatic Bar Assignment
Two Tabs website to take certain form inputs and display it on the table in real-time.

## About Project
This project was given as assignment by Senpiper Company.

## Development Insights
This project uses React framework and Local Storage for data inputs.

### Components

#### Tab Component
I created a custom tab component which is easy to maintain and scale as per needs of app/website.

#### Form Tab Component
This tab contains the form to take all input data and feedback from user. It uses useState hook to maintain data state and store it to local storage of browser. useEffect hook was used to maintain continous data validation of inputs as per their respective formats.

#### Table Tab Component
This tab shows all the data stored in local storage in table.

#### Toast
For notification or toast, I used [react-toastify](https://www.npmjs.com/package/react-toastify) for quick and easy notification.

### Styling
I created a separate CSS file for styling of form component as for easy understanding.

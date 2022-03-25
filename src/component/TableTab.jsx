import React from 'react'

const TableTab = () => {

  const tableData = JSON.parse(localStorage.getItem("formData"));
  console.log(tableData);

  const handleClear = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <div className='table_component'>
      <h1>All Details</h1>
      <button onClick={handleClear}>Clear</button>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Quality of Service</th>
            <th>Quality of Food</th>
            <th>Quality of Clean</th>
            <th>Final Review</th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.length > 0 ? (tableData.map((data, index) =>
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.feedback_host}</td>
              <td>{data.feedback_food}</td>
              <td>{data.feedback_clean}</td>
              <td>{data.feedback_final}</td>
            </tr>
          )) :
            <tr>
              <td colSpan={7} style={{textAlign: "center", textTransform: "capitalize"}}>{"No Data Available to show"}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableTab
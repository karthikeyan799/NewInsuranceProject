import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_LINE } from '../API';

export default function FetchById() {
  
  // const [fetch, setfetch] = useState({
  //   patientId: ''
  // })
  const [fetch,setfetch]=useState(null);
  const [records, setRecord] = useState(false);


  const onInputChange = (e) => {
    // setfetch({ patientId: e.target.value });
    setfetch({...fetch,[e.target.name]:e.target.value});
  };
  const fetchRecord = async () => {
    try {
      // const record = await axios.get(`http://localhost:8080/fetchPolicyById?id=${fetch.policyId}`,
      const record = await axios.get(`${API_BASE_LINE}fetchPolicyById?id=${fetch.policyId}`,
      );
      const rec = record.data.policy;

      if (rec === null) {
        alert("CustomerId is Not Found ");
        setRecord(false)
      }
      else {
        setfetch(rec)
        console.log(record.data)
        setRecord(true)
      }
      console.log("fetchById is success...")
    } catch (err) {
      console.log("id not found " + err)
    } finally {
      console.log("Fetch method is clicked")
    }
  }

  return (
    <div className='container fetcbyid p-3'>
      <div className='container' >
        <div className='pt-3' style={{ width: '30%', marginLeft: '35%' }}>
          <h1 className="text-center text-success mt-0">Fetch Policy Id</h1>
          <div
            className="d-flex"
            role="search"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            <div className='inputGroupContainer'>
              <div className='input-group'>
                <input type="number" className='form-control' name='policyId'  
                onChange={onInputChange} placeholder='Enter Policy ID'/>
                <span className='input-group-text' ><i className='fa fa-search' onClick={fetchRecord}></i></span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='mt-3'>
        {/* <h2>Search Id</h2>
        <div className='inputGroupContainer'>
          <div className='input-group'>
            <input type="number" className='form-contrl' name='id' value={fetch.patientId} onChange={onInputChange} />
            <span className='input-group-text' ><i className='fa fa-search' onClick={fetchRecord}></i></span>
          </div>
        </div> */}
        {records ?(
        <table className="table table-striped res table-primary ">
          <thead className="">
            <tr>
              <th>Id</th>
              <th>PolicyHolder</th>
              <th>PolicyType</th>
              <th>PolicyNumber</th>
              <th>Amount</th>
              <th>EndDate</th>
            </tr>
          </thead>
          <tbody>
            {/* {fetch ? ( */}
              <tr>
                <td>{fetch.policyId}</td>
                <td>    {fetch.policyHolder}</td>
                <td>    {fetch.policyType}</td>
                <td>{fetch.policyNumber}</td>
                <td>    {fetch.policyAmount}</td>
                <td>    {fetch.policyEndDate}</td>
              </tr>
            {/* ) : <p>No Search Data</p>} */}
          </tbody>
        </table>
        ):""}
        {/* {records?(
        <div className='container'>

          {fetch ? (
            <ul>

              <li>Policy Holder :{fetch.policyHolder}</li>
              <li>  {fetch.policyAmount}</li>
              <li>  {fetch.policyAmount}</li>
              <li>  {fetch.policyAmount}</li>
              <li>  {fetch.policyAmount}</li>
              <li>  {fetch.policyAmount}</li>
            </ul>
          ) : <p>No Search Data</p>
          }

        </div>
        ): <p className='text-center'>Loding ...</p> } */}
        {/* {fetch.policyId}
        {fetch.policyType}
        {fetch.policyNumber} */}
      </div>
      {/* ): <p>No records Founds...</p> } */}
    </div>
  )
}

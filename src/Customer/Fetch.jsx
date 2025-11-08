import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_BASE_LINE } from '../API';
// import { data } from 'react-router-dom';

export default function Fetch() {
  const [valid, setValid] = useState(false);
  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    // loadCustomers();
    // fetch("http://localhost:8080/getall")
    // .then((res)=>res.json)
    // .then((data)=>setPatient(data));
  }, []);

  const loadCustomers = async () => {

    try {
      // const result = await axios.get(`http://localhost:8080/fetchCustomerId?customerId=${customer.customerId}`);
      const result = await axios.get(`${API_BASE_LINE}fetchCustomerId?customerId=${customer.customerId}`);
      // setCustomer(result.data.customer);
      const datas = result.data.customer;
      console.log(datas);
      setValid(true);
      if (datas === null) {
        alert("Invalid Customer Id...");
        setValid(false);
      }
      else {
        setCustomer(datas);
      }
    } catch (error) {
      console.error("error loading patient:", error);
      setValid(false);
    }
  }
  const handleChange = (e) => {

    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }
  return (
    <div className='container p-3 mt2 fetcbyid'>
      <div className=''>
        <h2 className='text-center mt3'>Fetch Record</h2><hr />
        <div
          className="d-flex"
          role="search"
          style={{ justifyContent: "center", marginBottom: "20px" }}
        >
          <div className='inputGroupContainer'>
            <div className='input-group'>
              <input type="number" name='customerId' onChange={handleChange} 
              className='form-control'placeholder='Enter CustomerID' />
              <span className='input-group-text'><i className='fa fa-search' onClick={loadCustomers}></i></span>

            </div>
          </div>
        </div>
        {/* <div className='sFetch d-flex justify-content-center align-items-center row'>
          <input type="text" className='form-control w-25 col-6' name="patientId" id="patientId" />
          <button className='btn btn-success col-1'>S</button>
        </div> */}
      </div>
      {/* <table className="table table-bordered table-striped mt-2"> */}
      {
        valid ? (
          <table className="table table-bordered table-striped">
            <thead className=''>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Name</th>
                <th scope='col'>Age</th>
                <th scope='col'>Gender</th>
                <th scope='col'>E-Mail</th>
                <th scope='col'>City</th>
                <th scope='col'>Salary</th>
                <th scope='col'>PhoneNo</th>
              </tr>
            </thead>
            <tbody>
              {/* {patient.map((pat,index)=>( */}
              {/* { customer ? (patient.map((patient,index)=>(
          <tr>
            <th scope='row' key={index}>
              {patient.customerId}
            </th>
          
            <td>{patient.customerName}</td>
            <td>{patient.customerAge}</td>
            <td>{patient.customegender}</td>
            <td>{patient.eMail}</td>
            <td>{patient.city}</td>
            <td>{patient.salary}</td>
            <td>{patient.phoneNo}</td>
          </tr>
         ))):" no fetching record"} */}

              <tr>
                <td>{customer.customerId}</td>
                <td>{customer.customerName}</td>
                <td>{customer.customerAge}</td>
                <td>{customer.gender}</td>
                <td>{customer.eMail}</td>
                <td>{customer.city}</td>
                <td>{customer.salary}</td>
                <td>{customer.phoneNumber}</td>

              </tr>



            </tbody>
          </table>
        ) :
          <p className='text-center text-danger'>No Customer Id Founds...</p>
      }
    </div>
  );
}

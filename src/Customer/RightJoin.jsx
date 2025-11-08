import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_BASE_LINE } from '../API';

export default function RightJoin() {
  const [patient, setPatient] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  // const id=useParams();
  const rightJoin = async () => {
    try {
      // const result = await axios.get("http://localhost:8080/CustomerWithPolicyRight");
      // const result = await axios.get("http://localhost:8080/CustomerWithPolicyLeft")
      const result = await axios.get(`${API_BASE_LINE}CustomerWithPolicyLeft`)
      const datas = result.data.listCustomer;
      setValid(true);
      if (datas === null) {
        setValid(false);
        console.log("fetchall error...");
      } else {


        console.log(datas);
        setPatient(datas);

      }
    } catch (e) {
      console.log("error in right join + " + e);
      setValid(false);
    }
  }
  const deleteCustomer = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this record?");
      if (confirmDelete) {
        // await axios.delete(`http://localhost:8080/delete/${id}`)
        await axios.delete(`${API_BASE_LINE}delete/${id}`)
        rightJoin();
      }
    } catch (e) {
      console.log("error for delete customer : " + e)
    }
  }

  // const [policy, setPolicy] = useState([]);
  const [fetch, setFetch] = useState(null)
  const [valid, setValid] = useState(false);
  const fetchAll = async () => {
    try {
      // const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      const result = await axios.get(`${API_BASE_LINE}fetchAllCustomer`);
      setValid(true);
      if (result === null) {
        setValid(false);
        console.log("Fetch All Empty...")
      } else {
        setPatient(result.data.listCustomer);
        console.log(result.data);
      }
    } catch (error) {
      console.log("Policy Error" + error);
      setValid(false);
    }
  }
  const [currentPage, setCurrentPage] = useState(1);
  const currentList = [];
  const itemPerPage = 10;
  const startPage = (currentPage - 1) * itemPerPage;
  const endPage = startPage + itemPerPage;
  for (let i = 0; i < patient.length; i++) {
    currentList.push(patient.slice(i, i + 10));
  }
  const values = patient.slice(startPage, endPage);
  const handleClick = (e) => {
    console.log(e);
    setCurrentPage(e);
  }
  const [view, setView] = useState(false);
  const getView = (e) => {
    if (e !== null) {
      setSelectedCustomer(e);
      setView(true);
    }
  }
  useEffect(() => {
    // fetchAll();
    rightJoin();
  }, [])
  return (
    <div className='container p-4 bg-warning'>
      <div className='container bg-seconary fetcbyid pt-3' style={{
        //  height: "700px" ,
        border: "2px solid"
      }}>
        <h2 className='text-center mt-2'>Fetch All Records</h2>
        <hr />
        {valid ? (
          // <div className="overflow-y-scroll mt-3" style={{ height: "500px" }}>
          <div className="">
            <table className="table table-bordered table-striped " >
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
                  <th scope='col'>Policy</th>
                </tr>
              </thead>
              <tbody >

                {/* {values ? (values.map((patient, index) => ( */}
                {values ? (values.map((cus) => (
                  <tr key={cus.customerId}>
                    {/* <th scope='row' key={index}>
                      {patient.customerId}
                    </th> */}
                    <td>{cus.customerId}</td>
                    <td>{cus.customerName}</td>
                    <td>{cus.customerAge}</td>
                    <td>{cus.gender}</td>
                    <td>{cus.eMail}</td>
                    <td>{cus.city}</td>
                    <td>{cus.salary}</td>
                    <td>{cus.phoneNumber}</td>
                    <td>

                      {/* // <button style={{ border: "none" }} onClick={() => setSelectedCustomer(cus)} >View</button> */}
                      <button style={{ border: "none" }} onClick={() => getView(cus)} >View</button>

                      <button onClick={() => deleteCustomer(cus.customerId)}>Delete</button>
                    </td>
                  </tr>
                ))) : ""}
              </tbody>
            </table>
          </div>
        ) : <p>Loding ...</p>}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className='btn btn-warning mb-2 px-3' onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1} >Pre</button>
          <button className='btn btn-warning mb-2' onClick={() => handleClick(currentPage + 1)}
            disabled={endPage >= currentList.length}>next</button>
        </div>
      </div >

      {selectedCustomer ? (
        <div className='mt-4'>
          <div className='' style={{ border: "2px solid white" }}>
            <h3>Policies for <span>{selectedCustomer.customerName}</span></h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>PolicyId</th>
                  <th>PolicyHolder</th>
                  <th>PolicyType</th>
                  <th>PolicyAmount</th>
                  <th>PolicyNumber</th>
                  <th>PolicyStartDate</th>
                  <th>PolicyEndDate</th>
                </tr>
              </thead>
              <tbody>
                {/* {selectedCustomer.policy.policyId} */}
                {selectedCustomer.policy.map((p, index) => (
                  <tr >
                    <td>{p.policyId}</td>
                    <td>{p.policyHolder}</td>
                    <td>{p.policyType}</td>
                    <td>{p.policyAmount}</td>
                    <td>{p.policyNumber}</td>
                    <td>{p.policyStartDate}</td>
                    <td>{p.policyEndDate}</td>
                  </tr>
                ))}
                {/* <tr>
                  <td>{policy.policyId}</td>
                  <td>{policy.policyHolder}</td>
                  <td>{policy.policyType}</td>
                  <td>{policy.policyAmount}</td>
                  <td>{policy.policyNumber}</td>
                  <td>{policy.policyStartDate}</td>
                  <td>{policy.policyEndDate}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      ) : <p>No Child Class</p>}
    </div>
  )
}

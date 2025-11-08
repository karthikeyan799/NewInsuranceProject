import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FindAllPolicy from '../Policy/FindAllPolicy';
import { API_BASE_LINE } from '../API';

export default function FetchAll() {
  const [patient, setPatient] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [policy, setPolicy] = useState([]);
  const [fetch, setFetch] = useState(null)
  const [valid, setValid] = useState(false);
  const downlode = async () => {
    try {
      // const result = await axios.get("http://localhost:8080/excel", { responseType: "blob" });
      const result = await axios.get(`${API_BASE_LINE}excel`, { responseType: "blob" });
      console.log(result.data);
      const url = URL.createObjectURL(result.data);
      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = url;
      // link.setAttribute("download", "category.xlsx"); // file name its optional by karthi
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log("clicked downlode file")

    } catch (e) {
      console.log("errors on catch block in downlode files : " + e)
    }
  }
  const fetchAll = async () => {
    try {
      // const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      const result = await axios.get(`${API_BASE_LINE}fetchAllCustomer`);
      const datas = result.data.listCustomer;
      console.log(result.data)
      setValid(true);
      if (datas === null) {
        setValid(false);
        console.log("Fetch All Empty...")
      } else {
        setPatient(datas);
        setValid(true);
        console.log(datas);
      }
    } catch (error) {
      console.log("Policy Error" + error);
      setValid(false);
    }
  }
  const fetchPolicyById = async () => {
    // const result = await axios.get(`http://localhost:8080/fetchPolicyById?id=${fetch.policyId}`,)
    const result = await axios.get(`${API_BASE_LINE}fetchPolicyById?id=${fetch.policyId}`,)
    const rec = result.data.policy;
    if (rec === null) {
      alert("Policy data not found");

    } else {
      setFetch(rec);
    }
  }
  const deleteCustomer = async (id) => {
    const windowsalert = window.confirm("Are you sure you want to delete this record?")
    if (windowsalert) {
      // await axios.delete(`http://localhost:8080/delete/${id}`);
      await axios.delete(`${API_BASE_LINE}delete/${id}`);
      // const rec=result.data.listCustomer;
      // setPatient(rec);
      fetchAll();
    }


  }
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = patient.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(patient.length / recordsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [])
  return (
    <div className='container p-4 bg-warnng'>
      {valid ?(<>
      <div className='container bg-seconary fetcbyid pt-3' style={{
        //  height: "700px" ,
        border: "2px solid"
      }}>
        <h2 className='text-center mt-2'>Fetch All Records</h2>
        <hr />
        {valid ? (
          // <div className="overflow-y-scroll mt-3" style={{ height: "500px" }}>
          <div className="">
            <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
              <button className='btn btn-success my-3' style={{ border: "none", marginLeft: "10p" }}
               onClick={downlode}>Downlode File<i className="bi bi-file-earmark-arrow-down px-2"></i></button>
              {/* <div className='inputGroupContainer'>
                <div className='input-group'>
                  <input type="text" name="" id="" className='form-control' />
                  <span className='input-group-text'><i className='fa fa-search'></i></span>
                </div>
              </div> */}
            </div>
            <table className="table" >
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

                {/* {patient.map((cus) => ( */}
                {currentRecords.map((cus) => (
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
                      <button style={{ border: "none" }} onClick={() => setSelectedCustomer(cus)} >view</button>
                      <button style={{ border: "none", marginLeft: "10px" }} onClick={() => deleteCustomer(cus.customerId)}><i className='fa fa-trash'></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p>Loding ...</p>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='bt btn-warning mb-2 px-3' onClick={goToPrevPage} disabled={currentPage === 1}>
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>
            Page {currentPage} of {totalPages}
          </span>

          <button onClick={goToNextPage} className='bt btn-warning mb-2 px-3' disabled={currentPage === totalPages}>
            Next
          </button>
          {/* <button className='btn btn-warning mb-2 px-3' onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1} >Pre</button>
            <button className='btn btn-warning mb-2' onClick={() => handleClick(currentPage + 1)}
              disabled={endPage >= patient.length}>next</button> */}
        </div>
      </div >
      {/* {selectedCustomer && ( */}
      <div className='mt-4'>
        {selectedCustomer && (
          <div className='fetcbyid p-2' style={{ border: "2px solid white" }}>

            <h3>Customers for <span>{selectedCustomer.customerName}</span></h3>
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
                {selectedCustomer.policy.map((p, index) => (
                  <tr key={index}>
                    <td>{p.policyId}</td>
                    <td>{p.policyHolder}</td>

                    <td>{p.policyType}</td>
                    <td>{p.policyAmount}</td>
                    <td>{p.policyNumber}</td>
                    <td>{p.policyStartDate}</td>
                    <td>{p.policyEndDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* // ))}
    // ) } */}
    </>): <p>No Records</p> }
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_LINE } from '../API';

export default function UpdatePolicy() {
    const [policy, setPolicy] = useState({
        policyId: '',
        policyNumber: "",
        policyHolder: "",
        policyType: "",
        amount: "",
        policyStartDate: "",
        policyEndDate: "",
        policyAmount: "",
        customer: {
        customerId: ''
        }
    })
    const handleChange = (e) => {
        // setPolicy({ ...policy, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        if (name === "customerId") {
            setPolicy({ ...policy, customer: { customerId: value } });
        } else {
            setPolicy({ ...policy, [name]: value });
        }
    }
    const [error, setError] = useState({});
    const handleUpdate = async (e) => {
        const validationError = validation(policy);
        if (Object.keys(validationError).length === 0) {
            console.log("Form data is valid:", policy);
        } else {
            setError(validationError)
        }
        try {
            // const result = await axios.post(`http://localhost:8080/updatePolicy?policyId=${policy.policyId}`, policy);
            const result = await axios.post(`${API_BASE_LINE}updatePolicy?policyId=${policy.policyId}`, policy);
            const datas = result.data.policy;
            if (datas === null) {
                alert("update failed")
                setError(validation(policy))
            } else {
                setPolicy(datas);
                console.log(datas);
            }
        } catch (err) {
            console.log("submition " + err);
        }
    }
    const [add, setAdd] = useState([]);
    const loadPolicy = async () => {
        try {
            // const result = await axios.get("http://localhost:8080/fetchAllPolicy");
            const result = await axios.get(`${API_BASE_LINE}fetchAllPolicy`);
            const rec = result.data.listPolicy;
            // setCustomers(result.data.listPolicy);
            setAdd(rec);
            console.log(rec)
            console.log(result.data);
        } catch (err) {
            console.log(err);

        }
    };
    useEffect(() => {
        loadPolicy();
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const result = await axios.get(`http://localhost:8080/fetchPolicyById?id=${policy.policyId}`)
            const result = await axios.get(`${API_BASE_LINE}fetchPolicyById?id=${policy.policyId}`)
            const rec = result.data.policy;
            console.log(result.data.policy);
            setPolicy(rec);
            if (rec === null) {
                alert("Policy Id Not Found...");

            }
        } catch (err) {
            console.log("submit error...")
        }

    }

    return (
        <div className='container' style={{ borderTopLeftRadius: "50px", width: '80%' }}>
            <div className="row responsive bg-waring border rounder shadow fetcbyid">
                <div className="col-md-10 offset-md-1  p-2 my-4 " style={{ opacity: "0.9" }}>

                    {/* <div className='' style={{ width: '30%', marginLeft: '35%' }}> */}
                    <h1 className="text-center text-success mt3 ">Update</h1>
                    <div
                        className="d-flex"
                        role="search"
                        style={{ justifyContent: "center", marginBottom: "20px" }}
                    >
                        <div className='inputGroupContainer'>
                            <div className='input-group'>
                                <input type="number" className='form-control' placeholder='Enter Policy ID' onChange={handleChange} name='policyId' />
                                <span className='input-group-text'>
                                    <i className='fa fa-search' onClick={handleSubmit}></i>
                                </span>
                            </div>
                            {error.policyId && (
                                <span className='text-danger'>{error.policyId}</span>
                            )}

                        </div>
                    </div>
                    {/* </div> */}
                    <div className=''>

                        <div className='row'>
                            {/* <div
                                className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 mb-4 shadow"
                                style={{ opacity: "0.9" }}
                            > */}
                            {/* <h2 className='text-center m-2'>Update</h2> */}
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Number</label>
                                        <input type="text"
                                            className='form-control' name="policyNumber" onChange={handleChange}
                                             value={policy.policyNumber} id="" placeholder='Enter Policy Number'/>
                                        {error.policyNumber && (
                                            <span className='text-danger'>{error.policyNumber}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Holder</label>
                                        <input type="text"
                                            className='form-control' value={policy.policyHolder} 
                                            name="policyHolder" id="" onChange={handleChange} placeholder='Enter Policy Holder'/>
                                        {error.policyHolder && (
                                            <span className='text-danger'>{error.policyHolder}</span>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Type</label>
                                        <input type="text"
                                            className='form-control' name="policyType" onChange={handleChange}
                                             value={policy.policyType} id="" placeholder='Enter Policy Type'/>
                                        {error.policyType && (
                                            <span className='text-danger'>{error.policyType}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Amount</label>
                                        <input type="number"
                                            className='form-control' name="policyAmount" onChange={handleChange}
                                             value={policy.policyAmount} id="" placeholder='Enter Policy Amount' />
                                        {error.policyAmount && (
                                            <span className='text-danger'>{error.policyAmount}</span>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Start-Date</label>
                                        <input type="date"
                                            className='form-control' name="policyStartDate" onChange={handleChange} value={policy.policyStartDate} id="" />
                                        {error.policyStartDate && (
                                            <span className='text-danger'>{error.policyStartDate}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>End-Date</label>
                                        <input type="date"
                                            className='form-control' name="policyEndDate" onChange={handleChange} value={policy.policyEndDate} id="" />
                                        {error.policyEndDate && (
                                            <span className='text-danger'>{error.policyEndDate}</span>
                                        )}
                                    </div>
                                </div>

                            </div>
                            {/* <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="">CustomerId</label>
                                      
                                        <select name="customerId" 
                                            onChange={handleChange} id="customerId">
                                            <option value="">--Select--</option>
                                            {add.map((id) => (
                                                <option key={id.policyId}>{id.policyId}</option>
                                            ))}
                                        </select>
                                        {error.c &&(
                                                    <span className='text-danger'>{error.policyEndDate}</span>
                                                )}
                                    </div>
                                </div>
                            </div> */}
                            <div className="" style={{ display: 'flex', justifyContent: 'center' }}><button className='btn btn-success' onClick={handleUpdate}>Update</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    function validation() {
        let errors = {};
        if (policy.policyAmount === "") {
            errors.policyAmount = "Policy Amount is Required"
        }
        if (policy.policyType === "") {
            errors.policyType = "Policy Type is Required"
        }
        if (policy.policyHolder === "") {
            errors.policyHolder = "Policy Holder is Required"
        }
        if (policy.policyEndDate === "") {
            errors.policyStartDate = "Policy Start Date is Required"
        }
        if (policy.policyEndDate === "") {
            errors.policyEndDate = "Policy End Date is Required"
        }
        if (policy.policyNumber === "") {
            errors.policyNumber = "Policy Number is Required"
        }
        if (policy.policyId === "") {
            errors.policyId = 'Please Select PolicyId'
        }
        // if (policy.policyStartDate < policy.policyEndDate) {
        //     alert("Policy Date is not valid");
        // }
        return errors;
    }
}

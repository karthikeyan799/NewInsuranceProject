import axios, { } from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_LINE } from '../API';

export default function AddPolicy() {
    useEffect(() => {
        loadCustomer();
    }, [])
    const [add, setAdd] = useState([]);
    const [error, setError] = useState({});
    const [poli, setPoli] = useState({

        policyAmount: '',
        policyEndDate: '',
        policyHolder: '',
        policyNumber: '',
        policyStartDate: '',
        policyType: '',
        // customer: {
        customerId: ''
        // }
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setPoli(prev => ({
            ...prev,
            [name]: value
        }));
        // if (name === 'customerId') {
        //     setPoli((prev) => ({
        //         ...prev,
        //         customer: {
        //             // ...prev.customer,
        //             ...prev,
        //             customerId: value
        //         }
        //     }));
        // } else {
        //     setPoli((prev) => ({
        //         ...prev,
        //         [name]: value
        //     }));
        // }
    };
    const [data, setData] = useState(false);
    const loadCustomer = async () => {
        try {
            // const result = await axios.get("http://localhost:8080/fetchAllCustomer");
            const result = await axios.get(`${API_BASE_LINE}fetchAllCustomer`);
            const rec = result.data.listCustomer;
            if (rec == null) {
                setData(false);
            } else {
                setAdd(rec);
                setData(true);
                console.log(rec)
                console.log(result.data);
            }
        } catch (err) {
            console.log(err);

        }
    };
    const addPolicy = async () => {

        const payload = {
            ...poli,
            policyAmount: parseFloat(poli.policyAmount),
            customer: {
                customerId: parseInt(poli.customerId)
            }
        };

        const validationForm = validation(poli);
        if (Object.keys(validationForm).length === 0) {
            console.log("Form Data is Valid", poli);
        } else {
            setError(validationForm);
        }
        try {

            // const result = await axios.post("http://localhost:8080/createPolicy", payload);
            const result = await axios.post(`${API_BASE_LINE}createPolicy`, payload);
            const rec = result.data.policy;
            if (rec === null) {
                alert("Add Policy Is failer...")
                setError(validation(payload));

            } else {
                console.log(result);
                alert('success...');
                setPoli(rec)
                setError("")
            }

        } catch (err) {
            console.log(err);
            // alert('error');
        }
    }


    return (

        <div className="container " style={{ width: '80%' }}>
            <div className="row responsive bg-waring border rounder shadow fetcbyid pb-3">
                {/* <div style={{ width: "30%", marginLeft: "35%" }}> */}
                <div className="col-md-10 offset-md-1  p-2 my-4 " style={{ opacity: "0.9" }}>
                    <label htmlFor="">{poli.policyId}</label>
                    <h1 className="text-center text-success mt-3 ">Add Policy</h1>
                    <div
                        className="d-flex"
                        role="search"
                        style={{ justifyContent: "center", marginBottom: "20px" }}
                    >
                        <div className="inputGroupContainer">
                            <div className="input-group">
                                {data ? (<>
                                    <select name="customerId" id="customerId" value={poli.customerId} onChange={onInputChange} >
                                        <option value="">-- Select --</option>
                                        {add.map((id) => (
                                            <option key={id.customerId} >{id.customerId}</option>
                                        ))}

                                    </select>
                                    <span className="input-group-text">
                                        <i className="fa fa-search" onClick={loadCustomer}></i>
                                    </span></>
                                ) : <p className='text-danger'>Retreive customer Records does not exist in the list </p>}
                            </div>
                            {error.customerId && (
                                <span className="text-danger">{error.customerId}</span>
                            )}
                        </div>
                    </div>
                    <div className=''>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="CustomerName" className="form-table">
                                        Policy Holder
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name='policyHolder'
                                        value={poli.policyHolder}
                                        onChange={onInputChange}
                                    />
                                    {error.policyHolder && (
                                        <span className="text-danger">{error.policyHolder}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="CustomerAge" className="form-table">
                                        Policy Type
                                    </label>
                                    {/* <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name='policyType' value={poli.policyType} onChange={onInputChange}
                                    /> */}
                                    <select name="policyType"
                                        className='form-control text-center'
                                        id="policyType" value={poli.policyType}
                                        onChange={onInputChange}>
                                        <option> --  Select  -- </option>
                                        <option value="Health Insurance">Health Insurance</option>
                                        <option value="Life_Insurance">Life Insurance</option>
                                        <option value="Home Insurance">Home Insurance</option>
                                        <option value="Term Insurance">Term Insurance</option>
                                        <option value="Car Insurance">Car Insurance</option>
                                        <option value="Bike Insurance">Bike Insurance</option>
                                    </select>
                                    {error.policyType && (
                                        <span className="text-danger">
                                            {error.policyType}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="E-Mail" className="form-table">
                                        Policy Number
                                    </label>
                                    <label htmlFor="">{poli.policyNumber}</label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name='policyNumber'
                                        value={poli.policyNumber}
                                        onChange={onInputChange}
                                    />
                                    {error.policyNumber && (
                                        <span className="text-danger">{error.policyNumber}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="PhoneNumber" className="form-table">
                                        Policy Amount
                                    </label>
                                    <input
                                        type={"number"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name='policyAmount'
                                        value={poli.policyAmount}
                                        onChange={onInputChange}
                                    />
                                    {error.policyAmount && (
                                        <span className="text-danger">
                                            {error.policyAmount}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="City" className="form-table">
                                        Policy-Start-Date
                                    </label>
                                    <input type="date"
                                        className='form-control'
                                        name='policyStartDate'
                                        value={poli.policyStartDate}
                                        onChange={onInputChange} />


                                    {error.policyStartDate && (
                                        <span className="text-danger">{error.policyStartDate}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="Gender" className="form-table">
                                        Policy-End-Date
                                    </label>
                                    <input type="date"
                                        className='form-control'
                                        name='policyEndDate'
                                        value={poli.policyEndDate}
                                        onChange={onInputChange} />


                                    {error.policyEndDate && (
                                        <span className="text-danger">{error.policyEndDate}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: "center" }}>

                            <button className='btn btn-outline-success' onClick={addPolicy}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    function clear() {

    }
    function validation() {
        let errors = {};
        if (poli.policyAmount === "") {
            errors.policyAmount = "Policy Amount is Required"
        }
        else {
            errors.policyAmount = ""
        }
        if (poli.policyType === "") {
            errors.policyType = "Policy Type is Required"
        }
        if (poli.policyHolder === "") {
            errors.policyHolder = "Policy Holder is Required"
        }
        if (poli.policyEndDate === "") {
            errors.policyStartDate = "Policy Start Date is Required"
        }
        if (poli.policyEndDate === "") {
            errors.policyEndDate = "Policy End Date is Required"
        }
        // if (poli.policyNumber === "") {
        //     errors.policyNumber = "Policy Number is Required"
        // }
        if (poli.customerId === "") {
            errors.customerId = 'Please Select CustomerId'
        }
        if (poli.policyStartDate > poli.policyEndDate) {
            alert("Policy Date is not valid");
            errors.policyStartDate = "start date is not vali"
            errors.policyEndDate = "end date is not vali"

        }
        return errors;
    }
}
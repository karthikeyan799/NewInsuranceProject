import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { API_BASE_LINE } from '../API';


export default function FindAllPolicy() {

    const [policy, setPolicy] = useState([]);
    const [valid, setValid] = useState(false);
    const [page, setPage] = useState(1);
    // const [count, setCount] = useState(10);

    const fetchAll = async (e) => {
        try {
            // const result = await axios.get("http://localhost:8080/fetchAllPolicy");
            const result = await axios.get(`${API_BASE_LINE}fetchAllPolicy`);
            const rec = result.data.listPolicy;
            if (rec === null) {
                setValid(false);
                console.log("no records founds..." + e);
            } else {
                setValid(true);
                console.log("no fetching record");
                setPolicy(rec);
                console.log(result.data);
            }
        } catch (error) {
            console.log("Policy Error ...:" + error);
            setValid(false);

        }
        // const fetch= async axios.get
    }

    // const itemPerPage = 10;
    // const startPage = (page - 1) * itemPerPage;
    // const endPage = startPage + itemPerPage;
    // const buttonCount = [];
    // for (let i = 0; i <= customers.length; i += 10) {
    //     buttonCount.push(customers.slice(i, i + 10));
    // }
    // const values = customers.slice(startPage, endPage);

    // const handleClick = (e) => {
    //     console.log(e);
    //     setPage(e);

    // }
    useEffect(() => {
        fetchAll();
    }, []);
    return (
        <div className='container bg-secodary fetcbyid pt-3'>
            {/* <div> */}
            <h2 className='text-center mt-2'>Fetch All Policy</h2>

            {/* {values ? ( */}
            {valid ? (
                <>
                    {/* <div className='d-flex justify-content-end mb-1'>
                        <div className='inputGroupContainer'>
                            <div className='input-group'>
                                <input type="search" className='form-control' />
                                <span className='input-group-text'><i className='fa fa-search'></i></span>

                            </div>
                        </div>
                    </div> */}

                    <div>

                        <div className=''>
                            <table className='table '>
                                <thead>
                                    <tr>
                                        <th scope='col'>PolicyId</th>
                                        <th scope='col'>PolicyType</th>
                                        <th scope='col'>PolicyNumber</th>
                                        <th scope='col'>PolicyHolder</th>
                                        <th scope='col'>Amount</th>
                                        <th scope='col'>StartDate</th>
                                        <th scope='col'>EndDate</th>
                                        {/* <th scope='col'>Last-Updated</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // values ? (customers.map((policy, index) => (
                                        policy.map((policy, index) => (
                                            <tr>
                                                <td key={index}>{policy.policyId}</td>
                                                <td>{policy.policyType}</td>
                                                <td>{policy.policyNumber}</td>
                                                <td>{policy.policyHolder}</td>
                                                <td>{policy.policyAmount}</td>
                                                <td>{policy.policyStartDate}</td>
                                                <td>{policy.policyEndDate}</td>
                                                {/* <td>{policy.updatedAt}</td> */}
                                                <td><button onClick={() => deletePolicy(policy.policyId)}>del</button>
                                                    {/* <button>b</button> */}
                                                </td>
                                            </tr>
                                        ))}

                                </tbody>
                            </table>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {/* <button className='btn btn-warning mb-2 px-3' onClick={() => handleClick(page - 1)}
                                    disabled={page === 1} >Pre</button>
                                <button className='btn btn-warning mb-2' onClick={() => handleClick(page + 1)}
                                    disabled={endPage >= customers.length}>next</button> */}
                            </div>
                        </div>
                    </div>
                </>
            ) : <p className='text-center text-danger'>No Policy Datas...</p>}
        </div >
    )
}

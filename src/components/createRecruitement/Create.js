import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import SideBar from '../sidebar/SideBar';

const Create = () => {
    const { setUsers } = useContext(Context);
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs({
            ...inputs, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inputs data', inputs);
        setUsers(inputs);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-3"><SideBar /></div>
                <div className="col ">
                    <div>
                        <h1>Create New Recruitment</h1>
                        <form className="row g-3 py-5" onSubmit={ handleSubmit }>
                            <div className="col-md-12 py-2">
                                <input type="email" name='email' onChange={ handleChange } className="form-control" id="inputEmail4" placeholder='Enter Name Of Your Recruitment' />
                            </div>
                            <div className="col-md-6 py-3">
                                <select id="inputState" name='role' className="form-select" onChange={ handleChange }>
                                    <option defaultValue>Job Role: Other</option>
                                    <option>Graphic Designer</option>
                                    <option>Web Developer</option>
                                    <option>JavaScript Developer</option>
                                    <option>Full Stack Developer</option>
                                </select>
                            </div>
                            <div className="col-md-6 py-3">
                                <select id="inputState" name='level' className="form-select" onChange={ handleChange }>
                                    <option defaultValue placeholder='Select Level Of Employee'>Select Level Of Employee</option>
                                    <option>Internee</option>
                                    <option>Junior</option>
                                    <option>Senior</option>
                                </select>
                            </div>
                            <div className="col-12 py-3">
                                <input type="text" name='other' className="form-control" id="inputAddress2" placeholder='Other' onChange={ handleChange } />
                            </div>
                            <div className="col-md-12 py-3">
                                <input type="text" name='description' className="form-control" onChange={ handleChange } id="inputCity" placeholder='Write Description Here' />
                            </div>
                            <div className="col-12 py-3 text-end">
                                <button type="button" className="btn btn-outline-danger">Cancel</button>
                                <button type="submit" className="btn btn-success">Save & Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Create
import React from 'react'

const Create = () => {
    return (
        <div>
            <h1>Create New Recruitment</h1>
            <form className="row g-3 px-4 py-5">
                <div className="col-md-12 py-3">
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Name Of Your Recruitment' />
                </div>
                <div className="col-md-6 py-3">
                    <select id="inputState" className="form-select">
                        <option selected>Job Role: Other</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-6 py-3">
                    <select id="inputState" className="form-select">
                        <option selected placeholder='Select Level Of Employee'>Select Level Of Employee</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-12 py-3">
                    <input type="text" className="form-control" id="inputAddress2" placeholder='Other' />
                </div>
                <div className="col-md-12 py-3">
                    <input type="text" className="form-control" id="inputCity" placeholder='Write Description Here' />
                </div>
                <div className="col-12 py-3 text-end">
                    <button type="button" className="btn btn-outline-danger">Cancel</button>
                    <button type="submit" className="btn btn-success">Save & Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Create
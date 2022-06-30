import React, { useContext } from 'react'
import { Context } from '../context/Context'
import NavBar from '../navbar/NavBar';

const Active = () => {
    const { users } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>My Recruitment</h1>
                    <NavBar />
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>UserName</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return <tr className='bg-light' key={ index }>
                                            <td>{ user.name }</td>
                                            <td>{ user.email }</td>
                                            <td>{ user.age }</td>
                                            <td>{ user.userName }</td>
                                            <td>
                                                <button className='btn btn-outline-primary mx-1 my-1' data-bs-toggle="modal" data-bs-target="#edit">Edit</button>
                                                <button className='btn btn-outline-danger mx-1 my-1' data-bs-toggle="modal" data-bs-target="#delete">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active
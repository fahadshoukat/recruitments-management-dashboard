import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to='/'>Active</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/archive'>Archive</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/draft">Draft</Link>
                        </li>
                    </ul>
                </div>
                <button className='btn btn-success' onClick={()=> navigate('/create')}>Create Recruitment</button>
            </div>
        </nav>
    )
}

export default NavBar
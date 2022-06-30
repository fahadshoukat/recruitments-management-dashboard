import React from 'react'
import Active from '../active/Active'
import SideBar from '../sidebar/SideBar'

const Home = () => {
  return (
    <div className="container-fluid p-0">
        <div className="row">
            <div className="col col-md-3 p-0">
                <SideBar />
            </div>
            <div className="col">
                <Active />
            </div>
        </div>
    </div>
  )
}

export default Home
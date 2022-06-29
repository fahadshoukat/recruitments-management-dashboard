import React from 'react'
import Create from '../createRecruitement/Create'
import SideBar from '../sidebar/SideBar'

const Home = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col col-md-3">
                <SideBar />
            </div>
            <div className="col">
                <Create />
            </div>
        </div>
    </div>
  )
}

export default Home
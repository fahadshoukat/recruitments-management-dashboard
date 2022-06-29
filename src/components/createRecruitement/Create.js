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
            {/* footer */}
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
            {/* end footer */}
        </div>
    )
}

export default Create
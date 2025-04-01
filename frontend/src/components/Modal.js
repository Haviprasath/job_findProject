export default function Modal(){
    return (
        <div className="container col-md-6">
        <div >
            <div>
                <div className="d-flex justify-content-between" >
                    <h5 className="modal-title">Apply for this Job</h5>
                    <button type="button" className="btn-close" ></button>
                    <hr/>
                </div>
                <div>
                    <p>You need to be logged in to apply for this job</p>
                </div>
                <div className="d-flex justify-content-start">
                    <button type="button" className="btn btn-primary m-2"  >LogIn</button>
                    <button type="button" className="btn btn-secondary m-2">Create an Account</button>
                </div>
            </div>
        </div>
    </div>
    )
}
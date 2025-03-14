import firstImage from "../assets/images/first.jpeg";
export default Content;
function Content() {
    return (
        <div className="container-fluid " className="bg-warning-bg-subtle">
            <div className="row my-2">
                <div className="col-8">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search a Job..." aria-label="Search"/>
                        <input type="text" className="form-control" placeholder="Location..." aria-label="Search"/>
                        <input type="text" className="form-select" placeholder="Job Type..."
                               aria-label="Default select example"/>
                        <button className="btn btn-outline-light btn-primary " type="button" id="button-search">
                            Search
                        </button>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            <div className="row my-2">

                <h4 className="text-center bg-secondary-subtle">Explore Job Categories</h4>
                <div className="d-flex justify-content-around">
                    <div>
                        <img src="..." className="object-fit-fill border rounded" alt="..."/>
                        <h5>Technology</h5>
                        <h6>1,204 jobs</h6>

                    </div>
                    <div>
                        <img/>
                        <h5>Finance</h5>
                        <h6>1,204 jobs</h6>
                    </div>
                    <div>
                        <img/>
                        <h5>Design</h5>
                        <h6>1,204 jobs</h6>
                    </div>
                    <div>
                        <img/>
                        <h5>Healthcare</h5>
                        <h6>1,204 jobs</h6>
                    </div>
                    <div>
                        <img/>
                        <h5>Business</h5>
                        <h6>1,204 jobs</h6>
                    </div>

                </div>
                <h6 className="text-center  "><span className="btn text-info"> View all categories -></span></h6>
            </div>
            <div className="row m-3">
                <div className="col-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="" className="img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <a >Posted on 2 days age</a>
                                    <a className="text-decoration-none text-dark fw-bold" href="#">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

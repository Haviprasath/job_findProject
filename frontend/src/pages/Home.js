

import React,{useState,useEffect} from "react";
import {Fragment} from "react";
import './Home.css';
import {Link} from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import Description from "./Description";

export default function Home() {
    const [categorysummary,setcategory]=useState([])
    const [Alljobs,setJobs]=useState([])
    const [searchjobs,setsearchJobs]=useState([])
    const [job_title,setTitle]=useState("");
    const [location,setLocation]=useState("");
    const  [job_type,setType]=useState("");
    let jobs=[];
    async  function fetchJobs(){

        let item = {
            key:"value"
        };
        let response=await fetch("http://127.0.0.1:8000/api/Jobshow",{
                method:'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }

            });

             let  result = await response.json();
              // console.log(result);
            console.warn("this data fetch from backend result",result)
             setJobs(result);


        }
    useEffect(() => {
        fetchJobs(); //
    }, []);
    async  function fetchCategory(){

        let item = {
            key:"value"
        };
        let response2=await fetch("http://127.0.0.1:8000/api/Jobsummary",{
            method:'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            }

        });

        let  result2 = await response2.json();
        // console.log(result);
        console.warn("the category summary",result2)
        setcategory(result2);

    }
    useEffect(() => {
            fetchCategory();
        },[]);
        console.log(jobs);
        console.log(categorysummary);
    async function jobsearch(){

        let item={job_title,location,job_type};
        console.warn(job_title,location,job_type);
        let result=await fetch("http://127.0.0.1:8000/api/Jobsearch",{
                method:'POST',
                body:JSON.stringify(item),
                headers:{
                "Content-Type":"application/json",
                    "Accept":"application/json"

            }


        });
          result = await result.json();
          setsearchJobs(result);
          console.warn("the output of the search",result);

    }
    if(searchjobs.length>0){
        jobs=searchjobs;
    }
    else{
        jobs=Alljobs;
    }
    return (
    <Fragment>
        <div className="container-fluid " className="homebody">
            <div className="row my-2">
                <div className="col-8 p-3 m-3">
                    <div className="input-group">
                        <input type="text"  value={job_title} onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="Search a Job..." aria-label="Search"/>
                        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} className="form-control" placeholder="Location..." aria-label="Search"/>
                        <select type="text" className="form-control" onChange={(e)=>setType(e.target.value)}>
                            <option >Job Type...</option>
                            <option value="fulltime" >Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                        <button className="btn btn btn-primary " type="button" id="button-search" onClick={jobsearch}>
                            Search
                        </button>
                    </div>
                    <div  id="col-4">

                    </div>
                </div>
            </div>
            <div className="row my-2">

                <h4 className="text-center  p-3" id="title">Explore Job Categories</h4>
                <div className="d-flex justify-content-around p-3" id="category-container">
                    {categorysummary.length > 0 ? (
                            categorysummary.map((category, index) => (
                    <div id="category-box" className="object-fit-cover border rounded p-3">
                        <img src={category.img_url}  alt="..."/>
                        <h5>{category.category_name}</h5>
                        <h6>{category.job_count} Jobs</h6>

                    </div>
                                ))): (
                        <p>No category found.</p>
                    )}


                </div>
                <h6 className="text-center bg-white p-3 "><span className="btn text-info"> View all categories -></span></h6>
            </div>
            <div className="row m-3">
                <div className="d-flex justify-content-between">
                    <h5>Featured Jobs</h5>
                    <h6 className="btn text-info">view all jobs-></h6>
                </div>

                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                <div className="col-4 mb-4">
                    <div className="card">

                        <div className="card-body">
                            <div className="row">

                                        <div className="col-md-4">
                                            <img src="" className="img-fluid" alt="..."/>
                                        </div>
                                            <div className="col-md-8">
                                                <h5 className="card-title">{job.title}</h5>
                                                <p className="card-text">{job.company} Pvt.Ltd</p>
                                                <p className="card-text">{job.jobType}</p>
                                                <div className="">{job.location} Rs.{job.salary}</div>

                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <a >{job.created_at}</a>
                                              <Link to={`description/${job.id}`}>
                                                        <a className="text-decoration-none text-dark fw-bold" href="" >Apply now</a>
                                              </Link>

                                            </div>


                                    </div>
                        </div>

                    </div>
                </div>
                    ))
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
            <div className="row m-3">
                <div className="col-8">

                </div>
                <div className="col-4 center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    </Fragment>
    );
}






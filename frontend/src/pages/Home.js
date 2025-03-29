

import React,{useState,useEffect} from "react";
import {Fragment} from "react";
import './Home.css';
import {Link} from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import Description from "./Description";
import {fetchJobs} from "../Api services/fetchjob";
import {fetchCategory} from "../Api services/fetchCategory";
import {jobsearch} from "../Api services/jobsearch";
import {CompanyDetails} from "../Api services/CompanyDetails";

export default function Home() {
    const [categorysummary,setcategory]=useState([])
    const [Alljobs,setJobs]=useState([])
    const [searchjobs,setsearchJobs]=useState([])
    const [company,setCompany]=useState([]);
    const [job_title,setTitle]=useState("");
    const [location,setLocation]=useState("");
    const  [job_type,setType]=useState("");
    const [CurrentPageJob,setPageJob]=useState([]);
    let company_names=[];
    let jobs=[]; let index=0;


    useEffect(() => {
        fetchJobs().then(setJobs).catch(console.error);
    }, []);
    jobs=Alljobs;

    useEffect(() => {
            fetchCategory().then(setcategory).catch(console.error);
        },[]);

    // useEffect(() => {
    //     if(job_title.length>0 || job_type.length>0 ||location.length>0){
    //         jobsearch(job_title,job_type,location).then(setsearchJobs).catch(console.error);
    //     }
    //     else{
    //         console.log("there is no match found");
    //     }
    // }, [job_type,job_title,location]);

    if (searchjobs.length>0){
        jobs=searchjobs;
    }
    else{
        console.warn("there is no match found")
    }

    let PageNumber=1;
    let JobPerPage=3;
    let No_of_Pages=Math.ceil(jobs.length/JobPerPage);
    let pages=[];
    for(let i=1;i<=No_of_Pages;i++){
        pages.push(i);
    }
    console.log("pages array:",pages);

    function pagination(e){
         PageNumber=e.target.textContent;
         console.log("the page number is:",PageNumber);
        setPageJob(jobs.slice((PageNumber-1)*JobPerPage,PageNumber*JobPerPage));

    }

    useEffect(() => {
        setPageJob(jobs.slice(0,3));
    }, [jobs]);




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
                        <button className="btn btn btn-primary " type="button" id="button-search" onClick={()=> {
                            if (job_title.length > 0 || job_type.length > 0 || location.length > 0) {
                                jobsearch(job_title, job_type, location).then(setsearchJobs).catch(console.error);
                            } else {
                                console.log("there is no match found");
                            }
                        }
                            }>
                            Search
                        </button>
                    </div>

                    <div  className="col-4">
                        {(searchjobs.length>0)?(

                        <p className="alert alert-primary " role="alert ">job is found</p> ):
                            (
                        <p class="alert alert-danger" role="alert">No job is  found</p>)
                    }

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

                {CurrentPageJob.length > 0 && company ? (
                    CurrentPageJob.map((job, index) => (

                    <div className="col-4 mb-4">
                    <div className="card">

                        <div className="card-body">
                            <div className="row">
                                        <div className="col-md-4">
                                            <img src={job.logo} className="img-fluid" alt={job.name} />


                                        </div>

                                            <div className="col-md-8">
                                                <h5 className="card-title">{job.title}</h5>
                                                <p className="card-text">{job.name} Pvt.Ltd</p>
                                                <p className="card-text">{job.job_type}</p>
                                                <div className="">{job.location}</div>

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
                            {pages.length > 0 && company ? (
                                   pages.map((page, index) => (
                                       <li className="page-item"><a className="page-link" href="#" onClick={pagination}>{page}</a></li>
                                   ))) : (
                    <p>No pages found.</p>
                    )}
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    </Fragment>
    );
}








import React,{useState,useEffect} from "react";
import {Fragment} from "react";
import './Home.css';
import computer from "../assets/images/computer.png";
import bars from "../assets/images/bars.png";
import business from "../assets/images/business.png";
import healthcare from "../assets/images/healthcare.png";
import seo from "../assets/images/seo.png";
import design from "../assets/images/web-design.png";
export default function Home() {
    const [categorysummary,setcategory]=useState([])
    const [jobs,setJobs]=useState([])
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

    return (
    <Fragment>
        <div className="container-fluid " className="homebody">
            <div className="row my-2">
                <div className="col-8 p-3 m-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search a Job..." aria-label="Search"/>
                        <input type="text" className="form-control" placeholder="Location..." aria-label="Search"/>
                        <input type="text" className="form-select" placeholder="Job Type..."
                               aria-label="Default select example"/>
                        <button className="btn btn btn-primary " type="button" id="button-search">
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
                        <img src={computer}  alt="..."/>
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

                                        {/*<div className="col-md-4">*/}
                                        {/*    <img src="" className="img-fluid" alt="..."/>*/}
                                        {/*</div>*/}
                                            <div className="col-md-8">
                                                <h5 className="card-title">{job.title}</h5>
                                                <p className="card-text">{job.company} Pvt.Ltd</p>
                                                <p className="card-text">{job.jobType}</p>
                                                <div className="">{job.location} Rs.{job.salary}</div>

                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <a >{job.created_at}</a>
                                                <a className="text-decoration-none text-dark fw-bold" href="#">Apply now</a>
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
        </div>
    </Fragment>
    );
}






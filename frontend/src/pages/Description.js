
import {useParams} from "react-router-dom";
import {render} from "@testing-library/react";
import {Fragment, useEffect, useState} from "react";

export default function Description() {
    const {id}=useParams();
    const job_id = Number(id);
    const [company,setCompany]=useState([]);
    const [job,setJob]=useState([]);
    let company_name='';
    console.log();
     async function particularjob(){
         try {
             let response=await fetch(`http://127.0.0.1:8000/api/JobSearchById/${job_id}`,{
                 method:'GET',
                 headers:{
                     "content-type":"application/json",
                     "Accept":"application/json"
                 }
             });
             let result=await response.json();
             setJob(result);
             console.warn('the particular job',result);
         }
        catch (error){
             console.error("Error fetching job:", error);
        }
     }

    useEffect(() => {
        particularjob();
    }, []);

    async function CompanyDetails(){
            try {

               console.warn("Fetching company details for:",job.company);
                let response2 = await fetch(`http://127.0.0.1:8000/api/CompanyDetails/${job.company}`, {
                    method: 'GET',
                    headers: {
                        "content-type": "application/json",
                        "Accept": "application/json"
                    }
                });
                let result2 = await response2.json();
                console.warn('the company details', result2);
                setCompany(result2);
            }
            catch (error){
                console.log(error);
            }

    }

    console.warn('the company details',company);
    useEffect(() => {
        if (job && job.company) {
            CompanyDetails();
        }

    }, [job]);

    return(
        <Fragment>
            <div className="container-fluid ">

                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mb-4">{job.company} is hiring {job.title}</h1>
                        <p className="text-muted">Posted on: {job.created_at} </p>
                        <img src={company.logo} className="img-fluid mb-4" alt="logo"/>
                        <p>{job.location},SriLanka</p>

                    </div>
                    <div className="col-lg-4">
                        <div className="card mt-3">
                            <div className="card-body">
                                <h5 className="card-title">Related Posts</h5>
                                <ul className="list-unstyled">
                                    <li><a href='#'>Post 1</a></li>
                                    <li><a href="#">Post 2</a></li>
                                    <li><a href="#">Post 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-4">About {job.company}: </h6>
                        <p className="text-muted">{job.company}® {company.about}   </p>


                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-4">Role Overview: </h6>
                        <p className="text-muted">{job.company}® {job.role_overview} </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-4">Key Responsibilities: </h6>
                        <ul>
                            <li>{job.key_responsibilities}</li>
                            <li>   Build and maintain strong relationships with new and existing clients.</li>
                            <li>   Develop and execute effective sales strategies to meet and exceed revenue targets.</li>
                            <li>   Present DevJobs® services and solutions to potential clients through meetings, calls, and presentations.</li>
                             <li>   Collaborate with the marketing team to develop promotional materials and campaigns.</li>
                               <li>
                               </li>

                                <li>Stay updated on industry trends and competitors to identify new business opportunities.</li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-4">Requirements: </h6>
                        <ul>
                            <li>{job.role_requirements}</li>
                            <li>   Proven experience in sales, business development, or a related role.</li>
                            <li>    Excellent communication and interpersonal skills.</li>
                            <li>   Strong negotiation and presentation skills.</li>
                            <li>    Self-motivated with a results-driven approach.</li>
                            <li>     Ability to work independently and as part of a team.</li>
                            <li> Familiarity with the tech industry and job market is a plus.</li>
                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-4">What We Offer: </h6>
                        <ul>
                            <li>{job.offers}</li>
                            <li>    Opportunities for career growth and professional development.</li>
                            <li>    A dynamic and supportive work environment. </li>
                            <li>    The chance to be part of a leading tech job board in Sri Lanka.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className="mb-4">Salary and Compensation: </h2>
                        <h6>LKR-{job.salary}/Monthly</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div  className="d-grid gap-2 m-3">
                            <button className="btn btn-lg btn-primary">Apply for this job now</button>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </Fragment>

    )
}


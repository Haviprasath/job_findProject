import  './Header.css'
import firstImage from "../assets/images/first.jpeg";
import React from "react";
import {Link} from "react-router-dom";


export default function Header(){
    return (
        <header className="p-3  text-dark " id="header">

            <div className="row">
                <div className="col">
                    <h1 className="text-primary">JObie</h1>
                    <span>
                        <p className="fw-bold">We Have 500+ open Position Find The job That Suite Your Life</p>
                    </span>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center gap-3">
                         <Link to="home" className="text-dark text-decoration-none btn btn-outline-primary">
                          Home
                         </Link>
                        <Link to="about" className="text-dark text-decoration-none btn btn-outline-primary">
                            About
                        </Link>
                       <Link to="contact" className="text-dark text-decoration-none btn btn-outline-primary">
                        Contact
                       </Link>
                        <Link to="login" className="text-dark text-decoration-none btn btn-outline-primary">
                            Login
                        </Link>
                        <Link to="Reg" className="text-dark text-decoration-none btn btn-outline-primary">
                         Register
                        </Link>


                    </div>
                </div>
                    <div  id="imagebox" className="col">

                        <img id="image" src={firstImage} alt="A man searching a Job"     />
                        <Link to="admin"   className="btn btn-primary" >
                          Post a Job
                        </Link>


                    </div>


            </div>
        </header>
    );
}

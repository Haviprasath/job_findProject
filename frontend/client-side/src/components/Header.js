import  './Header.css'
import firstImage from "../assets/images/first.jpeg";
export default function Header(){
    return (
        <header className="p-3  text-dark">

            <div className="row">
                <div className="col">
                    <h1 className="text-primary">Jobie</h1>
                    <span>
                        <p>We Have 500+ open Position Find The job That Suite Your Life</p>
                    </span>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center gap-3">
                        <a className="text-dark text-decoration-none" class="btn btn-outline-secondary" href="">Home</a>
                        <a className="text-dark text-decoration-none" class="btn btn-outline-secondary"  href="">About</a>
                        <a className="text-dark text-decoration-none" class="btn btn-outline-secondary" href="">Contact</a>
                        <a className="text-dark text-decoration-none" class="btn btn-outline-secondary" href="">Login</a>
                        <a className="text-dark text-decoration-none" class="btn btn-outline-secondary"  href="">Register</a>
                    </div>
                </div>
                <div className="col">
                    <a type="button" class="btn btn-primary">Post a Job</a>
                </div>
                <div className="col">
                    {/*<span><img src={firstImage} alt="description"  height="400px" width="300px"  /></span>*/}
                </div>
            </div>
        </header>
    );
}

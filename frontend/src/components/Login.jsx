import './css/login.css';
import image1 from '../assets/img/man.png';



export default function Login()
{
    return(
        <>
        <div className='loginBack'>
        <div className='outlineBorder'>
        <form className='loginForm'>
          <h1>LOGIN</h1>
          <p>JOBie</p>
          <input type='text' className='fa' placeholder='&#xf007; Username'/><br/>
          <input type='password' className='fa' placeholder='&#xf023; Password'/><br/>
          <button className='loginButton'>Login Now</button>
          <a href='/register' className='labelLogin'><p><label>SignUp</label>  Here</p></a>
        </form>
        <span className='logoareaLogin'>
          <div className='blurArea'>
              
          </div>
          <img src={image1} className='logoVanni'/>
        </span>
      </div>
        </div>
        </>
    )
}
import { Link, useNavigate} from "react-router-dom";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





export default function Menu() {
    // const useParam = useParams();
    // const {id} = useParam;
    
    const Nav = useNavigate();
    const logout = () => {
        localStorage.clear();
        Nav('/login');
    }

   
    return (
        <>
       
        <div id="head">
        <div>
          <img src="hippo-removebg-preview.png" alt="" width="200px" id="img1" height="60px" />
          
          <div class="dropdown">
                    <button class="dropbtn" >Courses</button>
                    <div class="dropdown-content">
                        
                        <div class="linkcont">
                        <a href="#" >Full Stack</a>
                        <div class="subdrp">
                        <a href="https://www.w3schools.com/html/" target="blank">HTML</a>
                        <a href="https://www.w3schools.com/css/" target="blank">CSS</a>
                        <a href="https://www.w3schools.com/js/" target="blank">JAVA Script</a>
                        <a href="https://www.w3schools.com/react/" target="blank">REACT</a>
                        <a href="https://www.w3schools.com/nodejs/" target="blank">NODE</a>
                        </div>
                        </div>

                        <div class="linkcont1">
                        <a href="#">DEVOPS</a>
                        <div class="subdrp1">
                            <a href="#">Programming language</a>
                            <a href="#">OS Concept</a>
                            <a href="#">Linux </a>
                            <a href="#">Cloud Computing</a>

                        </div>
                        </div>
                        <div class="linkcont2">
                        <a href=" #">TESTING</a>
                        <div class="subdrp2">
                            <a href="#">java Oops Concepts</a>
                            <a href="#">Selenium</a>
                            <a href="#">Cucumber</a>
                          

                        </div>
                        </div>
                    </div>
                </div>
               {/* <div>
             <Link id="test1">FULL STACK</Link>
             <ul id="drop" style={{display:'none'}}>
                <li>hello</li>
             </ul>
             </div>
                 */}
        
        </div>
      </div> 
            <input type="checkbox" id="check" />
            <label for="check">
                {/* <i class="bi bi-arrow-bar-right" id="btn1"></i> */}
                <img id="btn1" src="menu.png" alt="" height="40px" width="40px"  style={{margin:'50px 0 0 0',position:'fixed'}}></img>
                <i class="bi bi-x-lg" id="canc" style={{margin:'45px 0 0 0',position:'fixed'}}></i>
            </label>
            <div className='slidebar'>
                <header>
                    <img src="user.jpg" alt="" height="80px" width="80px" style={{ borderRadius: '50%',marginBottom:'-20px',marginLeft:'20px' }}></img><br />
                    {/*Welcome Greetings */}
                    {localStorage.getItem('username') !== null ? <li><h5 style={{margin:'20px 0 0 -155px',fontSize:'18px'}} id="greets">Welcome {localStorage.getItem('username')} </h5></li> : ''}

                 
                </header>
                <ul>
                    {/* Home Page */}
                    <li><Link to='/'><i class="bi bi-house-fill"></i>Home</Link></li>

                    {/* Contact Page */}
                    <li><Link to='/first' ><i class="bi bi-person-lines-fill"></i>Contact</Link></li>

                    {/* Registration Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/register' ><i class="bi bi-r-circle-fill"></i>Register</Link></li> : ''}

                    {/* Users Page */}
                    {localStorage.getItem('roletype') === 'Admin' ? <li><Link to='/users' ><i class="bi bi-people-fill"></i>Users</Link></li> : ''}

                    {/* Tutor Page */}
                    {/* {localStorage.getItem('roletype') === 'Tutor' ? <li><Link to={`/tutor/${id}`} ><i class="bi bi-person-fill"></i>Tutor</Link></li> : ''} */}

                    {/* Student Page */}
                    {/* {localStorage.getItem('roletype') === 'Student' ? <li><Link to={`/student/${id}`}><i class="bi bi-person-fill"></i>Student</Link></li> : ''} */}

                    {/* Login Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/login' ><i class="bi bi-door-open-fill"></i>Login</Link></li> : ''}

                    {/* About Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/third' ><i class="bi bi-ticket-detailed-fill"></i>About</Link></li> : ''}

                    {/* Logout Page */}
                    {localStorage.getItem('username') !== null ? <li onClick={logout}><Link to=""><h5 id="logout"><i class="bi bi-door-closed-fill"></i>Logout</h5></Link></li> : ''}

                    

                </ul>
            </div>
           
        </>
    )
}
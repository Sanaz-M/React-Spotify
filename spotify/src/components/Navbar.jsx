import { NavbarBrand, NavDropdown,Navbar } from "react-bootstrap"
import {Link} from 'react-router-dom'
import previous from '../assets/previous.png'
import next from '../assets/next.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const NavBar = () => (
<Navbar>
        <NavbarBrand id="horizontal-nav" className="navbar navbar-expand-lg sticky-top ml-2" >
            <Link to="#"><img src={previous} width="15px" height="15px" id="lessThan" className="previous round mr-1"/></Link>
            <Link to="#"><img src={next} width="15px" height="15px" id="greaterThan" className="next round"/></Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"></li>
                    <li className="nav-item"></li>
                </ul>
                <div className="dropdown">
                    <button className="btn btn-user btn-sm dropdown-toggle justify-content-end mt-2 mr-auto" type="button"
                        id="dropdownMenuButton1" data-toggle="dropdown" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img src="covers/Recently-played/le-bask.jpg" height="30px" alt="" />
                        <span id="username1">new user</span>
                    </button>
                    <div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Account</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="start.html">Log out</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </NavbarBrand>
        </Navbar>

)

export default NavBar
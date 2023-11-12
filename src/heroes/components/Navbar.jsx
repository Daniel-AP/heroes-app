import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    const { authenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login", {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3 sticky-top">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={40} height={40} fill='white' stroke='current'>
                    <path d="M288 64C64 64 0 160 0 272S80 448 176 448h8.4c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4H400c96 0 176-64 176-176s-64-208-288-208zM224 256c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm192 64c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
                </svg>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav align-items-center gap-3">
                    <p className='text-info m-0'>{ authenticated.user }</p>
                    <p role={"button"} className='nav-item nav-link m-0' onClick={ handleLogout }>Log out</p>
                </ul>
            </div>
        </nav>
    )
}
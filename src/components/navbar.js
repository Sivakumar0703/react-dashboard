import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import React from 'react';





function Navbar() {


    return (
        <div className='menubar'>

            <nav className='navbar '>
                <div className='navbar-collapse'>

                    <ul className='navbar-nav'>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-emoji-laughing-fill fs-4"></i>
                                <span>Admin</span></a>
                        </li>

                        <hr className='ruler' />

                        <li className='nav-item'>
                            <a href='#'>
                                <i className='bi bi-speedometer '></i>
                                <span>Dashboard</span></a>
                        </li>

                        <hr className='ruler' />


                        <li className='nav-item dropdown'>
                            <a href='#' className='interface'>INTERFACE</a>
                            <a href='#' className='nav-link  dropdown-toggle' data-toggle='dropdown'>
                                <i className='bi bi-gear'></i>
                                <span>Component</span></a>

                            <div className='dropdown-menu'>
                                <a className='dropdown-item' href='#'>1</a>
                                <a className='dropdown-item' href='#'>1</a>
                                <a className='dropdown-item' href='#'>1</a>
                            </div>
                        </li>


                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-wrench"></i>
                                <span>Utilities</span></a>
                        </li>

                        <hr className='ruler' />

                        <li className='nav-item'>
                            <a href='#' className='addon'>ADDONS</a>
                            <a href='#'>
                                <i className="bi bi-folder-fill"></i>
                                <span>Pages</span></a>
                        </li>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-graph-up-arrow"></i>
                                <span>Charts</span></a>
                        </li>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-table"></i>
                                <span>Tables</span></a>
                        </li>

                        <hr className='ruler' />




                    </ul>

                </div>

            </nav >

        </div >
    );


}


export default Navbar
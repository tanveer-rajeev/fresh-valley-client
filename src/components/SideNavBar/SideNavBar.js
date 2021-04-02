import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import './Sidebar.css'
const SideNavBar = () => {
    return (
        // <div>
        //     <div className="col-md-3">
        //         <Link to="/admin" >Admin</Link>
        //         <br/>
        //         <Link to="/manageProduct" >Manage Product</Link>
        //     </div>
        // </div>
        <div className="sidebarClass text-center">
            <Nav>
                <Link to="/admin" className="m-2 list-item">Admin</Link>
                <Link to="/manageProduct" className="m-2 list-item">Manage Product</Link>
            </Nav>
        </div>
    );
};

export default SideNavBar;
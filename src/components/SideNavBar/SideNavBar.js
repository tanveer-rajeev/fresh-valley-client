import React from 'react';
import { Link } from "react-router-dom";
const SideNavBar = () => {
    return (
        <div>
            <div className="col-md-3">
                <Link to="/admin" >Admin</Link>
                <br/>
                <Link to="/manageProduct" >Manage Product</Link>
            </div>
        </div>
    );
};

export default SideNavBar;
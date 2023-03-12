import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div>
                <button>
                     <NavLink to="/home">one</NavLink>
                </button>

                <button>
                <NavLink to="/pageTwo">two</NavLink>
                </button>

                <button>
                <NavLink to="/pageThree">three</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
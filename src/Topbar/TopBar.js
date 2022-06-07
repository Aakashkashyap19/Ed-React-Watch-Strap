import React from 'react';
import classes from './TopBar.module.css';

const Topbar=()=>{
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="Amazon Logo"/>
            </nav>
        </header>
        
    );
}
export default Topbar;
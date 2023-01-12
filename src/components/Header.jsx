import React from "react";

function Header() {
  return (
     <div>
        <div className='hdr-container'>
            <ul className='header-list'>
            <h1 className='logos'>
                Ecommerce
            </h1>
                <li>Home</li>
                <li>Menu</li>
                <li>Design</li>
            </ul>
            <p className='hdr-contact'>Contact</p>
        </div>
    </div> 
  );
}

export default Header;


import React from 'react';
import { Link,useNavigate} from 'react-router-dom';


function Header() {

   const navigate = useNavigate(); // hook to navigate programmatically

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path); // navigate to selected route
  };


  return (
    <div>
      <header class="header">
      <Link to="" class="logoone">
      <img src='./images/logo.jpg' alt="logo" className='logo-img'/></Link>

      <nav class="navbar">
         <Link to='/'>Home</Link>
         <Link to='/Poster'>Poster</Link>

         <select onChange={handleChange} defaultValue="">
           <option value="/Service" >Service</option>
           <option value="/Gallery">Gallery</option>
           <option value="/Pricing">Price</option>
           <option value="/Review">Review</option>
           <option value="/About">About</option>
         </select>
         
         <Link to='/Contact'>Contact</Link>
      </nav>

      <div id="menu-bars" class="fas fa-bars"></div>
    </header>
    </div>
  )
}

export default Header;

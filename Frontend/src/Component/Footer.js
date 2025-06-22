import React from 'react'

function Footer() {

 
  return (
    <div>
       <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>Branches</h3>
          <a href="#" className='box-a'> <i class="fas fa-map-marker-alt"></i> India </a>
            <a href="#" className='box-a'> <i class="fas fa-map-marker-alt"></i> Uttar Pradesh, india - 276301</a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <a href="#"> <i class="fas fa-phone"></i> +91 6284020601 </a>

          <a href="mailto:cp028443@gmail.com" className='email-cp'><i class="fas fa-envelope"></i> cp028443@gmail.com </a>


        </div>

        <div class="box">
          <h3>follow us</h3>
          
          <a target='_blank' href="https://m.facebook.com/chandansahab.sahab/"> 
          <i class="fab fa-facebook-f"></i> Facebook </a>

          <a target='_blank' href="https://www.linkedin.com/in/chandan-prajapati-819521222"> 
          <i class="fab fa-linkedin-in"></i> linkedin </a>

          <a target='_blank' href="https://www.instagram.com/chandan_734/"> 
          <i class="fab fa-instagram"></i> Instagram </a>

          <a target='_blank' href="https://github.com/Chandan734">
         <i class="fab fa-github"></i> Github </a>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer;

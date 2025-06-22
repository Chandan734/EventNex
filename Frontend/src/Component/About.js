import React from 'react'

function About() {
  return (
    <div>
      <section class="about" id="about">
      <h1 class="heading"><span>about</span> us</h1>

      <div class="row">
        <div class="image">
          <img src="images/about.jpg" alt="" />
        </div>

        <div class="content">
          <h3>your occasion deserves our careful planning</h3>
          <p>
           About Dream Event Planners
At Dream Event Planners, we believe every celebration should be unforgettable. With years of experience in crafting bespoke events, we specialize in turning your visions into reality — whether it's a wedding, corporate gathering, or private party.
          </p>
          <p>
            Our passionate team is dedicated to flawless execution, creativity, and attention to detail, ensuring your special moments are seamless and magical. We pride ourselves on personalized service, innovative ideas, and making every client feel like the star of the show.
Let us bring your dreams to life and create memories that last a lifetime.
          </p>
          {/* <a href="#" class="btn">reach us</a> */}
          <button  className='btn'>Reach Us</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About;

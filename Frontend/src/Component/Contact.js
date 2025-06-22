import React from "react";
import { useState } from "react";

function Contact() {
  const[Name,setName]=useState('');
  const[Email,setEmail]=useState('');
  const[Number,setNumber]=useState('');
  const[Subject,setSubject]=useState('');
  const[Message,setMessage]=useState('');

  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleNumber=(event)=>{
    setNumber(event.target.value)
  }
  const handleSubject=(event)=>{
    setSubject(event.target.value)
  }
  const handleMessage=(event)=>{
    setMessage(event.target.value)
  }

  const handleClear=(event)=>{
    event.preventDefault();
    setName('')
    setEmail('')
    setNumber('')
    setSubject('')
    setMessage('')
 }
    const handleClick= async (event)=>{
      event.preventDefault();
      const data={
          Name:Name,
          Email:Email,
          Number:Number,
          Subject:Subject,
          Message:Message,
      };
      console.log(data);
      try{
        const response = await fetch(`http://localhost:3000/Contact`,{
          method:'POST',
          headers:{
            'Content-Type': 'appliaction/json'
          },
          body:JSON.stringify(data)
        });
        if(!response.ok){
          alert('Message sent successfully!');
           handleClear(event);} else {
           alert('Failed to send message.');
          }
          console.log(response);
      } catch(error){
        console.error('Contact:',error);
      }
  }
  return ( 
    <div>
      <section class="contact" id="contact">
      <h1 class="heading"><span>contact</span> us</h1>


      <form class="contctfrom" action="">
        <div class="inputBox">
          <input onChange={handleName}  value={Name}type="text" placeholder="name" />
          <input  onChange={handleEmail} value={Email} type="email" placeholder="email" />
        </div>
        <div class="inputBox">
          <input onChange={handleNumber} value={Number} type="tel" placeholder="number" />
          <input onChange={handleSubject} value={Subject} type="text" placeholder="subject" />
        </div>
        <textarea  onChange={handleMessage} value={Message} name="" placeholder="message"id=""cols="30"rows="10"></textarea>

        <button  onClick={handleClick} type="Submit" className='btn'>Send Message</button>
        <button  onClick={handleClear} type="Reset" className='btn'>Clear Message</button>
      </form>
    </section>
    </div>
  );
}

export default Contact;

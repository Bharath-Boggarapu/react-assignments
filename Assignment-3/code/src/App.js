import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrowleft='<'
var arrowright='>'
const persondetails ={  AppointmentElement:'9:00(24-05-2016)',
  Email:'alan.form@email.nl',
   phone:'+31123456739',
Status:'In Progress',
Door:'mark',
  Time:'10.30(25-05-2016)',
  PatientName:'Boltaart Bosbessen',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
 }

 function App() {
  return (  
    <div className="site-container">
      <div className='order-info1'>
        <div className='doctordetais'>

          <a href='#' className='arrow-left'>{arrowleft}</a>
          <h2>Alon ford</h2>
          <p>00000515152</p>

        </div>
        <button>Print</button>
      </div>
      <div className='customer-info'>
       <div> <h2>Appointment on:</h2><p>{persondetails.AppointmentElement}</p></div>
       <div><h2>Email data:</h2><p>{persondetails.Email}</p></div> 
       <div> <h2>Phone:</h2><p>{persondetails.phone}</p></div> 


      </div>
      <div className='order-info'>
        <div className='status'>
          <h2>Status</h2>
          <ul><li>{persondetails.Status}</li></ul>
        </div>
        <div className='door'>
          <h2>Door</h2>
          <p>{persondetails.Door}</p>
        </div>
        <div className='time'>
        <h2>Time</h2>
          <p>{persondetails.Time}</p>
        </div>

      </div>
      <div className='product-list'>
        <input className='checkbox' type='checkbox'></input>
        <img src={persondetails.profileImg}></img>
        <div>
          <h2>{persondetails.PatientName}</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <a href='#' className='arrow-right'>{arrowright}</a>

      </div>

    </div> 
  );
} 

export default App;
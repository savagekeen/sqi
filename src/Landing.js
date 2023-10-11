import React from 'react'

const Landing = () => {
  return (
    <div style={{marginTop:'20px'}} className='container'>
    <div style={{display:'flex'}} className='parent'>
    <div style={{marginRight:'100px',marginBottom:'10px'}} className='child-a'>
       <img src={require('./sqi-graduate.jpg')}height='400px' width='600px'/> 
       </div>
       
       <div style={{marginRight:'100px',width:"900px"}} className='child-b'>
        <hr></hr>
       <h4 style={{fontSize:'50px',fontStyle:'normal'}}>SCICT AT A GLANCE</h4>
       <p style={{fontSize:'2.1vh',font:'menu'}}>SQI College of ICT is an accredited institution. SQI College of ICT offers both National Diploma (2 years), Professional Diploma (1 year) and Certificate Courses (from 2 weeks).</p>
      
       <p style={{font:'menu',fontSize:'2.1vh'}}>The National Innovative Diploma conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
       
       <p style={{font:'menu',fontSize:'2.1vh'}}>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
       </div>
       <hr></hr>
    </div>
    </div>
  )
}

export default Landing
import React from 'react'

const Home = () => {
  return (
  <div style={{marginTop:'20px'}} className='container'>
  <div style={{display:'flex'}} className='parent'>
     <div style={{width:'500px'}} className='child-a'>
     <h1 style={{fontSize:'100px',fontStyle:'normal'}}>Study to</h1>
     <h1 style={{fontSize:'100px',fontStyle:'normal'}}>become a</h1>
     <h1 style={{fontSize:'50px',fontStyle:'normal'}}>global talent</h1>
     <p style={{fontFamily:'serif'}}>Learn new tech skills using a world-class curriculum from top</p>
     <p>industry experts in an accredited institution.</p>
     <button type="button" class="btn btn-primary btn-lg">Start Now</button>
     </div>
     <div style={{marginLeft:'50px'}} className='child-b'>
     <img src={require('./computer.png')}/> 
     </div>
  </div>
  </div>
  
  )
}

export default Home
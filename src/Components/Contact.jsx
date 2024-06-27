import React from 'react'

export default function Contact() {
  return (
    <div id='contact'  style={{ width: '100vw',alignItems:'center' }}>

    <div id='contact-text' style={{textAlign:'center'}}>
                    <h3 id='con'  style={{paddingTop:'30px',fontSize:'15px'}}>Get in Touch</h3>
                    <h1 style={{paddingTop:'10px',fontSize:'35px',fontWeight:'Bold'}}>Contact Me</h1>
      
                </div>    

    <div id='cont' style={{width:'250px',height:'60px', border:'2px solid rgb(163,163,163)',alignItems:'center',marginTop:'3%' }}>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
    <img style={{width:'20px',height:'20px'}} src='https://github.com/Aaraav/Portfolio/assets/76102028/de33f568-6531-40c0-bf68-14ab46a7b31d'/>
    <h1>aaraav2810@gmail.com
    </h1>
</div>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
    <img style={{width:'20px',height:'20px'}} src='https://github.com/Aaraav/Portfolio/assets/76102028/2bbb231a-fc42-4099-8c99-57d21072a457'/>
   <a href='https://www.linkedin.com/in/aaraav-sehgal/'><h1>Aaraav Sehgal
    </h1></a> 
</div>



    </div>

    <footer id='footer'>

    <ul style={{display:'flex',listStyle:'none',marginRight:'100px',marginTop:'10%'}}>
    <li style={{paddingRight:'30px',fontSize:'20px'}}><a href='#aboutme'>About</a></li>
        <li style={{paddingRight:'30px',fontSize:'20px'}}><a href='#exp'>Experience</a></li>
        <li style={{paddingRight:'30px',fontSize:'20px'}}><a href='#pro'>Projects</a></li>
        <li style={{paddingRight:'30px',fontSize:'20px'}}><a href='#con'>Contact</a></li>
              
      </ul>

      <h1 style={{textAlign:'center',fontSize:"10px",marginTop:'20px'}}>Copyright @ Aaraav Sehgal . All Rights Reserved</h1>

    </footer>


      
    </div>
  )
}

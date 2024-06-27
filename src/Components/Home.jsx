import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
    <div id='home' style={{width:'90vw',marginLeft:'0px',marginTop:'0px',height:'100vh',display:'flex'}}>

<div id='home-content' style={{marginTop:'35vh',marginLeft:'15vw',color:'rgb(85,85,85)'}}>
        <h3 style={{fontSize:'15px',marginBottom:'-10px',textAlign:'center'}}>Hello , I'm</h3>
        <h2  style={{fontSize:'35px',margin:'0px',font:'bold',textAlign:'center',color:'black'}}>Aaraav Sehgal</h2>
        <h3  style={{fontSize:'20px',margin:'0px',textAlign:'center'}}>Full Stack Developer</h3>
        {/* <button style={{ fontSize: '30px',marginLeft:"10px", border: '2px solid white', color: 'orangered', background: 'none', cursor: 'pointer' }}>
            Contact me
        </button> */}
        {/* <Button variant="outlined" style={{marginLeft:'10px',marginTop:'10px'}}>Contact me</Button> */}
        <a href='#contact'>
        <button style={{fontSize:'13px', border:'2px solid rgb(85,85,85)',borderRadius:'30px',width:'100px',height:'40px',margin:'20px'}}>Contact me</button>
        </a>
        <a href='https://drive.google.com/file/d/1D8qfwD9H2uaRW7WH7YIIkce1JSoj3uWB/view?usp=sharing' target='_blank' rel='noopener noreferrer'> 
        <button style={{fontSize:'13px', border:'none',backgroundColor:'rgb(85,85,85)',color:'white',borderRadius:'30px',width:'100px',height:'40px'}}>Download CV</button>   
              </a>


        </div>

        <Avatar
  alt="Remy Sharp"
  src="https://github.com/Aaraav/Portfolio/assets/76102028/3a90f1d3-ed67-4e93-9671-d23756fb1111"
  sx={{ width: 300, height: 300 }}
  style={{marginTop:'25vh',marginLeft:'18%'
    
  }}
  id='profile-img'
/>
           </div>

      
    </div>
  )
}

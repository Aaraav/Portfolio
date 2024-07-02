import React,{useLayoutEffect} from 'react'
import  Avatar  from '@mui/material/Avatar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
  useGSAP(()=>{
    gsap.from('#aboutme', {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '#aboutme',
        start: 'top 80%',
        end: 'bottom 20%',
       
      },

     
    });
      gsap.from('.textmain', {
        opacity: 0,
        duration: 2,
        yPercent:'100',
        scrollTrigger: {
          trigger: 'body',
          start: 'top 90%',
          end: 'bottom 20%',
        },
        stagger:'2'
  
       
      });
    

    gsap.from('#aboutme p', {
      opacity: 0,
      duration: 2,
      yPercent:'100',
      scrollTrigger: {
        trigger: '#aboutme',
        start: 'top 90%',
        end: 'bottom 20%',
      },
      stagger:'2'

     
    });

    

   
  })
  

  return (
    <>
        <div id='aboutme' style={{backgroundColor:'rgb(85,85,85)',width:"100vw",height:'100vh',color:'white'}}>
            
            <div className='textmain'  style={{textAlign:'center'}}>
                <h3 style={{paddingTop:'30px',fontSize:'15px'}}>Want to know more</h3>
                <h1 style={{paddingTop:'10px',fontSize:'35px'}}>About Me</h1>

            </div>

           <div style={{display:'flex',alignItems:'center'}}>

           <Avatar
  alt="Remy Sharp"
  src="https://github.com/Aaraav/Portfolio/assets/76102028/4c4c6fc1-7d2c-47c6-b363-3a985eeb3fd7"
  sx={{ width: 300, height: 300 }}
  style={{marginTop:'15vh',marginLeft:'12%',marginRight:'10%'
    
  }}
  id='profile-img2'
/>

            <p style={{width:'100%',marginRight:'10%'}}>I am a B. Tech Computer Science student at JC Bose University of Science and Technology, YMCA (2022-2026). I interned as an SDE at UMWELT.AI, optimizing codebases and enhancing application interfaces.  Proficient in Java, C++, JavaScript, ReactJS, NodeJS, and more, I've solved 200 problems on LeetCode and other coding platforms. I'm also active in the University Computer Center as its Junior Secretary, Geeksman Coding Society, and have organized successful tech talks and coding contests.</p>
                             



           </div>

        </div>


      
    </>
  )
}

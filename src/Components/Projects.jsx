import React from 'react'


const X=({imgg,title,btn1,btn2})=>{

    return (
        <div id='x' style={{width:'320px',height:'60vh',borderRadius:'2rem',border:' 2px solid rgb(163,163,163)',backgroundColor:'rgb(250,250,250)',marginLeft:'30px'}}>
            <img style={{width:'80%',height:'60%',marginLeft:'9%',marginTop:'10px',borderRadius:'2rem',objectFit:'cover'}} src={imgg}/>

            <h2 style={{textAlign:'center',fontSize:'30px',color:'black'}}>{title}</h2>

<div style={{justifyContent:'space-between',display:'flex'}}>
            <a href={btn1} target='_blank' rel='noopener noreferrer'> 
        <button style={{fontSize:'13px', border:'none',backgroundColor:'rgb(85,85,85)',color:'white',borderRadius:'30px',width:'100px',height:'40px',marginTop:'20px',marginLeft:'5px'}}>Github</button>   
              </a>

              <a href={btn2} target='_blank' rel='noopener noreferrer'> 
        <button style={{fontSize:'13px', border:'none',backgroundColor:'rgb(85,85,85)',color:'white',borderRadius:'30px',width:'100px',height:'40px',marginTop:'20px',marginRight:'5px'}}>Live Demo</button>   
              </a>
              </div>
            


            


        </div>

    );
}
  
export default function Projects() {
  return (
    <div id='projects' style={{ width: '100vw', height: '100vh', justifyContent: 'center',marginTop:'50px' }}>

<div style={{textAlign:'center'}}>
                <h3  id='pro' style={{paddingTop:'30px',fontSize:'15px'}}>Browse my recent</h3>
                <h1 style={{paddingTop:'10px',fontSize:'35px',fontWeight:'Bold'}}>Projects</h1>
  
            </div>
            <div id='project-row' style={{ display: 'flex', width: '100%', padding: '10px',justifyContent:'space-between' }} className="hide-scrollbar">
            <X imgg="https://github.com/Aaraav/Portfolio/assets/76102028/293caa7d-157e-4945-94dc-f3edee9ac08e" title="Selemn" btn1="https://github.com/Aaraav/Selemenreact.git" btn2="https://aaraavselemn.netlify.app" />

  <X imgg="https://github.com/Aaraav/Portfolio/assets/76102028/595b99a1-9513-4df2-84df-fd729c2fe6b9" title="UrbanGroove" btn1="https://github.com/Aaraav/restaurant-backend.git" btn2="https://urbangroove.netlify.app" />
  <X imgg="https://github.com/Aaraav/Portfolio/assets/76102028/d35258b5-bd79-4cf1-be59-22ec94786e20" title="PatilKaki" btn1="https://github.com/Aaraav/patilkaki.git" btn2="https://patilkakiaaraav.netlify.app" />
  <X imgg="https://github.com/Aaraav/Portfolio/assets/76102028/72626434-000c-4aca-908c-8c0c7823855f" title="VentureAgency" btn1="https://github.com/Aaraav/movie-maina.git" btn2="https://aaraav.netlify.app" />
            <X imgg="https://github.com/Aaraav/Portfolio/assets/76102028/9b63b44f-2f69-4dd1-bd12-908fe1cb2c5a" title="SocioHub" btn1="https://github.com/Aaraav/SocialMedia.git" btn2="" />

</div>

<h1 style={{textAlign:'center',marginTop:'2%',fontSize:'15px'}}> For More Projects <br/> Please visit my <a style={{fontSize:'25px',fontWeight:'bold'}} href='https://github.com/Aaraav'>Github</a></h1>



<hr style={{ marginTop: '2vh', height: '2px', backgroundColor: '#1a1a1a', border: 'none' }} />

      
    </div>
  )
}

import React from 'react';
// Corrected component name to start with an uppercase letter
import verifiedIcon from '@mui/icons-material/Verified'
const X = ({ efficiency, title }) => {
    return (
        <div id='x-skill' style={{ width: '100px', height: '60px', alignItems: 'center', justifyContent: 'center',margin:'20px' }}>
            
            <div>
                
                <h2>{title}</h2>
                </div>
                <p>{efficiency}</p>
            
        </div>
    );
}



export default function Skills() {
    return (
        <div id='main-skill' style={{ justifyContent: 'center' }}>
  <div style={{textAlign:'center'}}>
                <h3 style={{paddingTop:'30px',fontSize:'15px'}}>Explore my</h3>
                <h1 id='exp' style={{paddingTop:'10px',fontSize:'35px',fontWeight:'Bold'}}>Experience</h1>

            </div>

            <div id='skills' style={{display:'flex',width:'100vw',height:'auto',marginBottom:'5vh'}}>

            <div className='high-box' style={{width:'300px',height:'70vh'}}>
                <h1 style={{textAlign:"center",marginBottom:'4vh',fontSize:'20px'}}> Frontend Development</h1>
<div className='box' style={{  backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex',flexWrap:'wrap'}}>      
<X efficiency='advanced' title='HTML' />
<X efficiency='advanced' title='CSS'/>      
<X efficiency='intermediate' title='JavaScript'/>    
<X efficiency='Advanced' title='ReactJS'/>
<X efficiency='intermediate' title ='NextJS'/> 
            </div>

            </div>

            <div className='high-box' style={{width:'300px',height:'70vh'}}>
                <h1 style={{textAlign:"center",marginBottom:'4vh',fontSize:'20px'}}> Backend Development</h1>
<div className='box' style={{ backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex',flexWrap:'wrap'}}>      
<X efficiency='Intermediate' title='Node' />
<X efficiency='Intermediate' title='Express'/>      
<X efficiency='intermediate' title='MongoDB'/>    
<X efficiency='Basic' title='PostgreSQL'/>
<X efficiency='Basic' title ='AWS lambda'/> 
            </div>

            </div>

            <div className='high-box' style={{width:'300px',height:'70vh'}}>
                <h1 style={{textAlign:"center",marginBottom:'4vh',fontSize:'20px'}}>Dev Tools</h1>
<div className='box' style={{  backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex',flexWrap:'wrap'}}>      
<X efficiency='Intermediate' title='Git' />
<X efficiency='Intermediate' title='Redux'/>      
<X efficiency='intermediate' title='Shadcn'/>    
<X efficiency='Intermediate' title='GraphQL'/>
<X efficiency='Intermediate' title ='Sockets/WebRTC'/> 
<X efficiency='Basic' title='Docker'/>

            </div>

            </div>

            </div>

            <hr className='line' style={{  height: '2px', backgroundColor: '#1a1a1a', border: 'none' }} />
            
        </div>
    );
}

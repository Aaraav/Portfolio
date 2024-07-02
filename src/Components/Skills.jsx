import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const X = ({ efficiency, title }) => {
  return (
    <div style={{ width: '100px', height: '60px', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
      <div>
        <h2>{title}</h2>
      </div>
      <p>{efficiency}</p>
    </div>
  );
};

export default function Skills() {

 
  useEffect(() => {
    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');

    const handleMouseOver = (element) => {
      element.style.transform = 'scale(1.2)';
    };
    const handleMouseExit = (element) => {
      element.style.transform = 'scale(1)';
    };

    b1.addEventListener('mouseover', () => handleMouseOver(b1));
    b1.addEventListener('mouseout', () => handleMouseExit(b1));

    b2.addEventListener('mouseover', () => handleMouseOver(b2));
    b2.addEventListener('mouseout', () => handleMouseExit(b2));

    b3.addEventListener('mouseover', () => handleMouseOver(b3));
    b3.addEventListener('mouseout', () => handleMouseExit(b3));

    return () => {
      b1.removeEventListener('mouseover', () => handleMouseOver(b1));
      b1.removeEventListener('mouseout', () => handleMouseExit(b1));

      b2.removeEventListener('mouseover', () => handleMouseOver(b2));
      b2.removeEventListener('mouseout', () => handleMouseExit(b2));

      b3.removeEventListener('mouseover', () => handleMouseOver(b3));
      b3.removeEventListener('mouseout', () => handleMouseExit(b3));
    };
  }, []);

  useGSAP(() => {
    gsap.to(['#b1', '#b2', '#b3'], {
      duration: 0.5,
      ease: 'power2.inOut',
      scale: 1,
    });

    gsap.from('#textmain2', {
      opacity: 0,
      yPercent:'-100',
      duration: 2,
      scrollTrigger: {
        trigger: '#aboutme',
        start: 'top 90%',
        end: 'bottom 20%',
      },
      stagger:'2'

     
    });
  
  });

  return (
    <div id='main-skill' style={{ justifyContent: 'center' }}>
      <div id='textmain2'  style={{ textAlign: 'center' }}>
        <h3 style={{ paddingTop: '30px', fontSize: '15px' }}>Explore my</h3>
        <h1 id='exp' style={{ paddingTop: '10px', fontSize: '35px', fontWeight: 'Bold' }}>
          Experience
        </h1>
      </div>

      <div id='skills' style={{ display: 'flex', width: '100vw', height: 'auto', marginBottom: '5vh' }}>
        <div className='high-box' style={{ width: '300px', height: '70vh' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '4vh', fontSize: '20px' }}>
            Frontend Development
          </h1>
          <div id='b1' className='box' style={{ backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex', flexWrap: 'wrap' }}>
            <X efficiency='advanced' title='HTML' />
            <X efficiency='advanced' title='CSS' />
            <X efficiency='intermediate' title='JavaScript' />
            <X efficiency='Advanced' title='ReactJS' />
            <X efficiency='intermediate' title='NextJS' />
          </div>
        </div>

        <div className='high-box' style={{ width: '300px', height: '70vh' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '4vh', fontSize: '20px' }}>
            Backend Development
          </h1>
          <div id='b2' className='box' style={{ backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex', flexWrap: 'wrap' }}>
            <X efficiency='Intermediate' title='Node' />
            <X efficiency='Intermediate' title='Express' />
            <X efficiency='intermediate' title='MongoDB' />
            <X efficiency='Basic' title='PostgreSQL' />
            <X efficiency='Basic' title='AWS lambda' />
          </div>
        </div>

        <div className='high-box' style={{ width: '300px', height: '70vh' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '4vh', fontSize: '20px' }}>
            Dev Tools
          </h1>
          <div id='b3' className='box' style={{ backgroundColor: 'whitesmoke', border: '1px solid black', boxShadow: '10px 10px 5px #1a1a1a', display: 'flex', flexWrap: 'wrap' }}>
            <X efficiency='Intermediate' title='Git' />
            <X efficiency='Intermediate' title='Redux' />
            <X efficiency='intermediate' title='Shadcn' />
            <X efficiency='Intermediate' title='GraphQL' />
            <X efficiency='Intermediate' title='Sockets/WebRTC' />
            <X efficiency='Basic' title='Docker' />
          </div>
        </div>
      </div>

      <hr className='line' style={{ height: '2px', backgroundColor: '#1a1a1a', border: 'none' }} />
    </div>
  );
}
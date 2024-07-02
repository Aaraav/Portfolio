import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function Page0() {

    useGSAP(()=>{
 gsap.from('#page0',{
    xPercent:'100',
    duration:'1'
 });

 gsap.to(['#head1','#head2','#head3'],{
    y:'-350',
    delay:'0.5',
    stagger:'1'

 })

 gsap.to('#page0',{
    yPercent:'-100',
    delay:'4'
 })

 gsap.to('#welcome',{
    yPercent:'-10',
    opacity:'1',
    delay:'3'
 })
 
    }
    )

  return (
    <>
    <div id='page0' className='bg-black h-screen w-screen absolute z-50 align-middle text-white '>

        <h1 id='head1' className='text-8xl mt-14' style={{textAlign:'center'}}>Engineer</h1>

<h1 id='head2' className='text-8xl' style={{textAlign:'center'}}>Software developer</h1>

<h1 id='head3' className='text-8xl' style={{textAlign:'center'}}>FreeLancer</h1>

<h2 id='welcome' className='text-9xl  absolute z-auto opacity-0'>Welcome.</h2>
      
    </div>
    
    </>
  )
}

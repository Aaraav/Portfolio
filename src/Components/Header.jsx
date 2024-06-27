import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuVisible(false); // Hide menu if resizing to larger screen
      }
    };

    // Set the initial state
    handleResize();

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div id='header' style={{ width: '100vw', height: '10vh', position: 'absolute', top: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgb(85,85,85)' }}>
      <h1 style={{ fontSize: '30px' }}><span>A</span>araav</h1>
      {isMobile ? (
        <>
          <img src='/src/assets/menu-burger.png' alt='Menu' onClick={toggleMenu} style={{ cursor: 'pointer',width:'70px',height:'70px' }} />
          {menuVisible && (
            <ul style={{ display: 'flex', flexDirection: 'column',color:'white', position: 'absolute', top: '10vh', right: '0', backgroundColor: '#1a1a1a', listStyle: 'none', padding: '10px',zIndex:'100000000' }}>
              <li style={{ padding: '10px', fontSize: '20px' }}><a href='#aboutme'>About</a></li>
              <li style={{ padding: '10px', fontSize: '20px' }}><a href='#exp'>Experience</a></li>
              <li style={{ padding: '10px', fontSize: '20px' }}><a href='#pro'>Projects</a></li>
              <li style={{ padding: '10px', fontSize: '20px' }}><a href='#con'>Contact</a></li>
            </ul>
          )}
        </>
      ) : (
        <ul style={{ display: 'flex', listStyle: 'none', marginRight: '100px' }}>
          <li style={{ paddingRight: '30px', fontSize: '20px' }}><a href='#aboutme'>About</a></li>
          <li style={{ paddingRight: '30px', fontSize: '20px' }}><a href='#exp'>Experience</a></li>
          <li style={{ paddingRight: '30px', fontSize: '20px' }}><a href='#pro'>Projects</a></li>
          <li style={{ paddingRight: '30px', fontSize: '20px' }}><a href='#con'>Contact</a></li>
        </ul>
      )}
    </div>
  );
}

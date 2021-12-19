import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilty className="Tilt br2 shadow-2" style={{ transformStyle: 'preserve-3d' }}>
			  <div className="Tilt-inner pa3" style={{ transform: 'translateZ(30px)' }}>
			  	<img style={{paddingTop: '5px'}} alt="logo" src={brain}/>
			  </div>
			</Tilty>
		</div>
	);
}

export default Logo;
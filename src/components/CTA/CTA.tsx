import React from 'react';
import Heading from '../Heading/Heading';
import './cta.css';
import Button from './../Button/Button';

function CTA() {
	return (
		<div className='cta py-10 px-4 lg:py-32 lg:px-96 text-center'>
			<Heading label='Speak to a Career Expert' variant='white' />
			<p className='cta_desc mt-4 mb-8'>
				We have are dedicated to finding the best fit for you. Get in
				touch to organise a face-to-face catch up with someone from our
				team.
			</p>
			<Button label='Get in touch' variant='secondary' />
		</div>
	);
}

export default CTA;

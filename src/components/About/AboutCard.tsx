/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import tick from '../../assets/about/about-tick.png';

function AboutCard(props: any) {
	return (
		<div className='about-card flex mb-10 w-72'>
			<img
				className='about-card_tick h-3 mr-2 mt-1.5'
				src={tick}
				alt=''
			/>
			<div className='about-card_text'>
				<p className='mb-4 font-bold'>{props.itemTitle}</p>
				<p>{props.itemDesc}</p>
			</div>
		</div>
	);
}

export default AboutCard;

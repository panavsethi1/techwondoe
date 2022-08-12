import { profile } from 'console';
import React from 'react';

function ProfileCard(props) {
	return (
		<div className='profile-card p-10 z-10 flex flex-col justify-between mb-4 lg:mb-0'>
			<div>
				<img className='mb-4' src={props.logo} alt='' />
				<p className='profile-card_title mb-4'>{props.title}</p>
				<p className='profile-card_desc mb-4'>{props.desc}</p>
			</div>
			<a href='/' className='profile-card_link'>
				Learn More
			</a>
		</div>
	);
}

export default ProfileCard;

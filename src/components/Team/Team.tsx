import React, { useEffect, useState } from 'react';
import useContentful from './../../hooks/useContentful';
import Button from './../Button/Button';
import Heading from '../Heading/Heading';
import './team.css';

function Team() {
	const [teamData, setTeamData] = useState({
		photo: '',
		title: '',
		desc: '',
	});

	const { getTeam } = useContentful();

	useEffect(() => {
		getTeam().then((res) => {
			setTeamData({
				photo: res.items[0].fields.photo.fields.file.url,
				title: res.items[0].fields.title,
				desc: res.items[0].fields.desc,
			});
		});
	});

	return (
		<div className='team py-20 px-0 xl:py-32 lg:px-36 xl:px-64 flex flex-col lg:flex-row justify-between items-center'>
			<div className='team_photo lg:mb-0 mb-8'>
				<img src={teamData.photo} alt='' />
			</div>
			<div className='gutter'></div>
			<div className='team_text px-4 lg:px-0'>
				<p className='team_text_header'>Our Team</p>
				<div className='mb-4'>
					<Heading variant='primary' label={teamData.title} />
				</div>
				<p className='team_text_desc mb-10'>{teamData.desc}</p>
				<Button label='Learn More' variant='primary' />
			</div>
		</div>
	);
}

export default Team;

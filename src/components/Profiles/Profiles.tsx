import React, { useEffect, useState } from 'react';
import './profiles.css';
import vector from '../../assets/profiles/profile-vector.png';
import ProfileCard from './ProfileCard';
import useContentful from './../../hooks/useContentful';

function Profiles() {
	const [profiles, setProfiles] = useState([
		{
			logo: '',
			title: '',
			desc: '',
		},
	]);

	const { getProfiles } = useContentful();

	useEffect(() => {
		let temp = [];
		getProfiles().then((res) => {
			res.items.forEach((i) => {
				temp.push({
					logo: i.fields.logo.fields.file.url,
					title: i.fields.title,
					desc: i.fields.desc,
				});
			});
			temp = temp.reverse();
			setProfiles(temp);
		});
	});

	return (
		<div className='profiles relative overflow-hidden py-20 px-4 lg:py-32 lg:px-72'>
			<div className='profiles_items flex justify-between flex-col lg:flex-row items-center lg:items-stretch'>
				{profiles.map((profile, index) => {
					return <ProfileCard key={index} {...profile} />;
				})}
			</div>
			<img
				className='profiles_vector absolute right-0 bottom-0 z-0 hidden lg:block'
				src={vector}
				alt=''
			/>
		</div>
	);
}

export default Profiles;

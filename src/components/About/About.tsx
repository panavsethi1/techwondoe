/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import useContentful from '../../hooks/useContentful';
import AboutCard from './AboutCard';
import aboutVector from './../../assets/about/about-vector.png';
import Heading from './../Heading/Heading';
import './about.css';

function About() {
	const [aboutList, setAboutList] = useState<any>();
	const { getAbout } = useContentful();

	useEffect(() => {
		getAbout()
			.then((res) => {
				let temp = res?.items.map((item) => {
					return item.fields;
				});
				temp = temp.reverse();
				setAboutList(temp);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='about px-10 lg:px-36 py-10 xl:pt-32 xl:pb-28 xl:px-72 relative'>
			<div className='about_title mb-12'>
				<div className='mb-4'>
					<Heading variant='primary' label='Why Choose Us?' />
				</div>
				<p>
					We have decades of experience, having successfully recruited
					across the globle for many years.
				</p>
			</div>
			<div className='w-full about_items flex flex-col lg:flex-row flex-wrap justify-between items-center'>
				{aboutList?.map((a: any, i: any) => {
					return <AboutCard key={i} {...a} />;
				})}
			</div>
			<img
				className='absolute left-0 hidden xl:block'
				src={aboutVector}
				alt=''
			/>
		</div>
	);
}

export default About;

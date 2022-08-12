import React, { useEffect, useState } from 'react';
import useContentful from '../../hooks/useContentful';
import Nav from './Nav';
import './hero.css';
import Heading from '../Heading/Heading';

function Hero() {
	const [isLg, setIsLg] = useState<boolean>();
	const [hero, setHero] = useState({
		title: '',
		image: '',
		vector: '',
	});
	const { getHero } = useContentful();

	useEffect(() => {
		if (window.innerWidth > 1024) {
			setIsLg(true);
		} else {
			setIsLg(false);
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1024) {
				setIsLg(true);
			} else {
				setIsLg(false);
			}
		});

		getHero()
			.then((res) =>
				setHero({
					title: res?.items[0].fields.heroTitle,
					image: res?.items[0].fields.bgImages[0].fields.file.url,
					vector: res?.items[0].fields.bgImages[1].fields.file.url,
				})
			)
			.catch((err) => console.error(err));
	}, []);

	return (
		<div id='hero' className='hero h-screen overflow-hidden'>
			<Nav />
			<div
				className='hero_main h-full'
				style={{
					backgroundImage: `url(${hero.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				{!isLg && (
					<div className='hero-heading w-full text-center z-10 absolute left-1/2 top-1/2'>
						<Heading
							label='Take the leap with us'
							variant='white'
						/>
					</div>
				)}
				<img
					src={hero.vector}
					alt=''
					className='hero_main_vector bottom-0 z-0'
				/>
			</div>
		</div>
	);
}

export default Hero;

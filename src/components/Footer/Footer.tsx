import React from 'react';
import facebook from '../../assets/footer/facebook.png';
import linkedin from '../../assets/footer/linkedin.png';
import insta from '../../assets/footer/instagram.png';

function Footer() {
	const data = {
		links: [
			'Home',
			'About',
			'Candidates',
			'Employers',
			'Latest News',
			'Contact',
		],
		contact: '+62 (0) 9 124 5470\ncareers@namespace.com',
		address: 'Level 3\n79 High Street\nMelbourne CBD\n1010',
	};

	return (
		<div className='footer flex lg:flex-row flex-col-reverse p-6 lg:p-20'>
			<div className='footer_logos flex justify-end lg:justify-center mt-4 lg:mt-0'>
				<div className='footer_logo_items flex lg:mx-0 xl:mx-36 items-end h-full'>
					<img className='mr-2 mb-2' src={facebook} alt='' />
					<img className='mr-2 mb-2' src={linkedin} alt='' />
					<img className='mr-2 mb-2' src={insta} alt='' />
				</div>
			</div>
			<div className='footer_data flex flex-col lg:flex-row justify-between w-full lg:px-28 '>
				<div className='wrapper flex mb-2 lg:mb-0'>
					<div className='footer_links flex flex-col mr-16'>
						{data.links.map((link, index) => {
							if (index < 3) {
								return (
									<a className='mb-4' key={index} href='/'>
										{link}
									</a>
								);
							} else {
								return null;
							}
						})}
					</div>
					<div className='footer_links flex flex-col'>
						{data.links.map((link, index) => {
							if (index > 2) {
								return (
									<a className='mb-4' key={index} href='/'>
										{link}
									</a>
								);
							} else {
								return null;
							}
						})}
					</div>
				</div>
				<div className='footer_contact mb-6 lg:mb-0'>
					<pre className='underline'>{data.contact}</pre>
				</div>
				<div className='footer_address'>
					<pre>{data.address}</pre>
				</div>
			</div>
		</div>
	);
}

export default Footer;

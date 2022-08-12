import React, { useEffect, useState } from 'react';
import downArrow from '../../assets/hero/down-arrow.png';
import hamburger from '../../assets/hero/nav.png';

function Nav() {
	const [isLg, setIsLg] = useState<boolean>();
	const [isOpen, setIsOpen] = useState(false);

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
	}, []);

	const handleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isLg ? (
				<div className='nav h-14 flex justify-end items-center pr-20'>
					<div className='nav_item inline flex justify-center items-center'>
						About{' '}
						<img className='ml-2 w-3' src={downArrow} alt='' />
					</div>
					<div className='nav_item inline'>Job Search</div>
					<div className='nav_item inline flex justify-center items-center'>
						Candidates{' '}
						<img className='ml-2 w-3' src={downArrow} alt='' />
					</div>
					<div className='nav_item inline flex justify-center items-center'>
						Employers{' '}
						<img className='ml-2 w-3' src={downArrow} alt='' />
					</div>
					<div className='nav_item inline'>Latest News</div>
					<div className='nav_item inline'>Contact</div>
				</div>
			) : (
				<>
					<div className='nav h-14 flex justify-end items-center pr-10'>
						<img
							onClick={handleNav}
							className='w-6'
							src={hamburger}
							alt=''
						/>
					</div>
					{isOpen && (
						<div className='nav_ham w-full absolute right-o z-10 flex flex-col justify-end items-end pr-10'>
							<div className='nav_item inline flex justify-end items-center'>
								About{' '}
								<img
									className='ml-2 w-3'
									src={downArrow}
									alt=''
								/>
							</div>
							<div className='nav_item inline'>Job Search</div>
							<div className='nav_item inline flex justify-center items-center'>
								Candidates{' '}
								<img
									className='ml-2 w-3'
									src={downArrow}
									alt=''
								/>
							</div>
							<div className='nav_item inline flex justify-center items-center'>
								Employers{' '}
								<img
									className='ml-2 w-3'
									src={downArrow}
									alt=''
								/>
							</div>
							<div className='nav_item inline'>Latest News</div>
							<div className='nav_item inline'>Contact</div>
						</div>
					)}
				</>
			)}
		</>
	);
}

export default Nav;

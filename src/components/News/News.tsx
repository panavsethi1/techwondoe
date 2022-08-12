import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Heading from './../Heading/Heading';
import './news.css';
import NewsCard from './NewsCard';
import useContentful from './../../hooks/useContentful';

function News() {
	const [newsItems, setNewsItems] = useState([
		{
			image: '',
			author: '',
			date: '',
			title: '',
		},
	]);
	const [isLg, setIsLg] = useState(true);
	const { getNews } = useContentful();

	useEffect(() => {
		let temp = [];
		getNews().then((res) => {
			res.items.forEach((i) => {
				temp.push({
					photo: i.fields.image.fields.file.url,
					author: i.fields.author,
					date: i.fields.date,
					title: i.fields.title,
				});
			});
			temp = temp.reverse();
			setNewsItems(temp);
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 1024) {
				setIsLg(true);
			} else {
				setIsLg(false);
			}
		});
	}, []);

	return (
		<div className='news px-4 lg:px-32 py-10 xl:pt-32 xl:pb-28 xl:px-72'>
			<div className='news_header w-full flex justify-between items-center mb-8'>
				<Heading label='Latest News' variant='primary' />
				{isLg ? (
					<Button label='View All' variant='primary' />
				) : (
					<a href='/' className='news_header_link'>
						View All
					</a>
				)}
			</div>
			<div className='news_items w-full flex justify-between items-center lg:items-stretch flex-col lg:flex-row'>
				{newsItems &&
					newsItems.map((item, index) => {
						return <NewsCard key={index} {...item} />;
					})}
			</div>
		</div>
	);
}

export default News;

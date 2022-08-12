import React from 'react';
import './news.css';

function NewsCard(props: any) {
	return (
		<div className='news-card flex flex-col justify-between mb-10 lg:mb-0'>
			<div className='news-card_data'>
				<img
					className='news-card_data_img'
					src={'https:' + props.photo}
					alt=''
				/>
				<p className='news-card_data_info'>
					by {props.author} | props.date
				</p>
				<p className='news-card_data_title'>{props.title}</p>
			</div>
			<div className='news-card_link'>
				<a href='/'>Read More &rarr;</a>
			</div>
		</div>
	);
}

export default NewsCard;

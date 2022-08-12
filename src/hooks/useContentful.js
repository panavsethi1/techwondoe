import { createClient } from 'contentful';

const useContentful = () => {
	const client = createClient({
		space: '7ijyxg8vwjj3',
		accessToken: '-SXDuzwA7ik8qzHNsYoiXFq44TCKnLXMRSzlQ3kLySU',
		host: 'cdn.contentful.com',
	});

	const getHero = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'hero',
				select: 'fields',
			});

			return entries;
		} catch (error) {
			console.log(`Error fetching hero ${error}`);
		}
	};

	const getAbout = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'heroSection',
				select: 'fields',
			});
			return entries;
		} catch (error) {
			console.log(`Error fetching about ${error}`);
		}
	};

	const getTeam = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'team',
				select: 'fields',
			});
			return entries;
		} catch (error) {
			console.log(`Error fetching team ${error}`);
		}
	};

	const getNews = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'news',
				select: 'fields',
			});
			return entries;
		} catch (error) {
			console.log(`Error fetching news ${error}`);
		}
	};

	const getProfiles = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'profiles',
				select: 'fields',
			});
			return entries;
		} catch (error) {
			console.log(`Error fetching profiles ${error}`);
		}
	};

	return { getHero, getAbout, getTeam, getNews, getProfiles };
};

export default useContentful;

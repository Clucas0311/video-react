import axios from 'axios';

const KEY = 'AIzaSyCbmKz8Uqfykgc4Nb5l3lkaoxZ8BK1vlG8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

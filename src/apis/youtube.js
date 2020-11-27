import axios from 'axios';

const KEY = 'AIzaSyBejaIBK5CoVsGr6mCvDkvryyHqyimUVKQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

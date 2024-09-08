import axios from '../config/axios';

class PostService {
	async findAll() {
		try {
			const response = await axios.get('/posts');
			console.log(response);
			return response.data;
		} catch (err) {
			console.log(err);
			throw new Error(`Error fetching posts ${err}`);
		}
	}
}

export default new PostService();

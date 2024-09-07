import { IPost } from '../models';

let posts: IPost[] = [];

class PostService {
	findAll() {
		return posts;
	}

	find(params: { id: string }) {
		const { id } = params;
		const post = posts.find((p) => p.id === id && p.id);

		if (!post) {
			return {
				status: 'success',
				message: 'Post not found',
			};
		}

		return post;
	}

	delete(params: { id: string }) {
		const { id } = params;
		const filteredPosts = posts.filter((p) => p.id !== id);

		posts = filteredPosts;

		return posts;
	}

	add(params: { title: string; description: string; userId: string; clientId: string }) {
		const { title, description, userId } = params;

		const newPost = {
			id: new Date().getTime().toString(),
			title,
			description,
			created_by: userId,
		};

		posts.push(newPost);

		return newPost;
	}
}

export default new PostService();

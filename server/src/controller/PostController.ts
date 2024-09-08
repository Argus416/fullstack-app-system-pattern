import { Request, Response } from 'express';
import PostService from '../services/PostService';
import UserService from '../services/UserService';
import { IPost } from '../models/index';
import { faker } from '@faker-js/faker';
import _ from 'lodash';

let posts: IPost[] = _.range(0, 50).map((e) => {
	return {
		id: new Date().getTime().toString(),
		title: faker.food.adjective(),
		description: faker.food.description(),
		created_by: faker.string.uuid(),
	};
});

class PostController {
	findAll(req: Request, res: Response) {
		res.json(posts);
	}

	findAllPostsWithUsers(req: Request, res: Response) {
		let posts = PostService.findAll();
		const users = UserService.findAll();

		posts = posts.map((post) => {
			return {
				...post,
				created_by: users.find((user) => user.id === post.created_by),
			};
		});
	}

	find(req: Request, res: Response) {
		const { id } = req.params;
		const post = PostService.find({ id });
		res.json(post);
	}

	delete(req: Request, res: Response) {
		const { id } = req.params;

		res.json(
			PostService.delete({
				id,
			})
		);
	}

	add(req: Request, res: Response) {
		const newPost = PostService.add({
			...req.body,
		});

		res.json(newPost);
	}
}

export default new PostController();

import express from 'express';
import PostController from '../controller/PostController';

const Router = express.Router();

Router.get('/posts', PostController.findAll);
Router.get('/posts-with-users', PostController.findAllPostsWithUsers);

Router.get('/posts/:id', PostController.find);

Router.delete('/posts/:id', PostController.delete);

Router.post('/posts', PostController.add);

export default Router;

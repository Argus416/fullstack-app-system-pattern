import dotenv from 'dotenv';
import express from 'express';
import apiV1 from './src/router/v1.ts';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/v1', apiV1);

let posts = [];

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

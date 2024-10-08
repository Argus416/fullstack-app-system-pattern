import express from 'express';
import apiV1 from './router/v1';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

app.use('/api/v1', apiV1);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

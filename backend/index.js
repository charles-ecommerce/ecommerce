import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products';
import { connectDB } from './database/db';
dotenv.config();
const PORT = process.env.PORT || 5000;

const start = async function start() {
	connectDB();
	const app = express();

	app.use(cors());

	app.get('/', (_, res) => {
		res.json('Api is running');
	});

	app.get('/api/products', (_, res) => {
		res.json(products);
	});

	app.get('/api/products/:id', (req, res) => {
		const product = products.find((p) => p._id === req.params.id);
		res.json(product);
	});

	app.listen(PORT, () => {
		console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
	});
};

start();

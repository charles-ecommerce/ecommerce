import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import { json, urlencoded } from 'body-parser';
import { connectDB } from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware';
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.underline
			.bold
	);
});

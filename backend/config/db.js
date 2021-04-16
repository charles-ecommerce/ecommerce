import mongoose from 'mongoose';

export const connectDB = async function connectDB() {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(
			`MONGODB Connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (error) {
		console.log(error, `Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

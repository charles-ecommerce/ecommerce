import { createConnection } from 'typeorm';

export const connectDB = async function connectDB() {
	try {
		await createConnection();
		console.log(`Postgres Database is running`);
	} catch (error) {
		console.error(error, `ERROR: ${error.message}`);
	}
};

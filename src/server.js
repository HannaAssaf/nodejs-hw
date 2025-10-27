import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
    limit: '100kb',
  }),
);
app.use(cors());
app.use(cookieParser());

app.use(authRoutes);
app.use(notesRoutes);
app.use(userRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './utils/db.js';
import contactRoutes from './routes/contactRoutes.js'; // Import contact routes

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use contact routes
app.use('/api', contactRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

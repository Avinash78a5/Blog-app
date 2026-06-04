
const connectDB = require('./config/db');

const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

//Connect to db
connectDB();

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port on http://localhost:${PORT}`);
})
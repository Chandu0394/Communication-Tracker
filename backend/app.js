const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const companyRoutes = require('./src/models/company');
const methodRoutes = require('./src/models/method');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/companies', companyRoutes);
app.use('/methods', methodRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.log('Database connection failed:', err);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

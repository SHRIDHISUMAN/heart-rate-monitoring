const express = require('express'); // express → creates the server.
const mongoose = require('mongoose'); // mongoose → connects to the database.
const cors = require('cors'); // cors → allows cross-origin requests.
const path = require('path');// path → helps with file paths.
const app = express(); // express instance
const PORT = 5000; // 

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/lifesync', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB error:', err);
});

// Mongoose Models
const History = require('./models/History');
const User = require('./models/User');
const Login = require('./models/Login');

// GET: Heart Rate History
app.get('/history', async (req, res) => {
  try {
    const history = await History.find().sort({ timestamp: -1 }); 
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add heart rate entry (simulate hardware)
app.post('/history', async (req, res) => {
  const { heartRate } = req.body;

  try {
    const entry = new History({
      heartRate,
      timestamp: new Date()
    });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST: Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ email, password }); // You can hash password using bcrypt
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // You may log the login time using Login model here
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

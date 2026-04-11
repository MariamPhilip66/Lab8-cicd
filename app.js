const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = 'taskdb';

let db;

async function connectDB() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  db = client.db(DB_NAME);
  console.log('Connected to MongoDB');
}

app.get('/tasks', async (req, res) => {
  const tasks = await db.collection('tasks').find().toArray();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const result = await db.collection('tasks').insertOne(req.body);
  res.json(result);
});

connectDB().then(() => {
  app.listen(3000, () => console.log('App running on port 3000'));
});

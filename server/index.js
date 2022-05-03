const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); // allows us to access the req.body

//ROUTES//

//get all todos

//get a todo

//create a todo
app.post('/todos', async (req, res) => {
  try {
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log('server started on port 5000');
});

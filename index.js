const express = require('express');
const app = express();
const port = 3001;


function validateData(req, res, next) {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

 
  if (typeof ID !== 'number') {
    return res.status(400).send('bad request. some data is incorrect.');
  }
  if (typeof Name !== 'string') {
    return res.status(400).send('bad request. some data is incorrect.');
  }
  if (typeof Rating !== 'number') {
    return res.status(400).send('bad request. some data is incorrect.');
  }
  if (typeof Description !== 'string') {
    return res.status(400).send('bad request. some data is incorrect.');
  }
  if (typeof Genre !== 'string') {
    return res.status(400).send('bad request. some data is incorrect.');
  }
  if (!Array.isArray(Cast) || Cast.some(item => typeof item !== 'string')) {
    return res.status(400).send('bad request. some data is incorrect.');
  }



  next();
}

app.use(express.json()); 

app.post('/', validateData, (req, res) => {
  // Data is valid at this point
  res.status(200).send('data received');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

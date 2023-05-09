import planetes from './data/planetes.json' assert { type: 'json' };
import lunes from './data/lunes.json' assert { type: 'json' };
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/planetes', (req, res) => {
  res.json(planetes);
});

app.get('/lunes', (req, res) => {
  res.json(lunes);
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);

});

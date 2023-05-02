import planetes from './data/planetes.json' assert { type: 'json' };
import lunes from './data/lunes.json' assert { type: 'json' };
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/planetes', (req, res) => {
  res.send(planetes);
  console.log ('cards');
});

app.get('/lunes', (req, res) => {
  res.send(lunes);
  console.log ('cards');
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);

});

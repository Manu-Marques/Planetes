import cards from './data/planetes.json' assert { type: 'json' };
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/cards', (req, res) => {
  res.send(cards);
  console.log ('cards');
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);

});

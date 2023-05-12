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

app.get ('/planetes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const planeta = planetes.find((planeta) => planeta.id === id);
  if (planeta) {
    res.json(planeta);
  } else {
    res.status(404).json({ error: `Planeta ${id} no encontrado` });
  }
});

app.get ('/lunes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const luna = lunes.find((luna) => luna.id === id);
  if (luna) {
    res.json(luna);
  } else {
    res.status(404).json({ error: `Luna ${id} no encontrada` });
  }
});

app.get('/data', (req, res) => {
  res.json(lunes);
});

// app.get('/data', (req, res) => {
//   const filePath = `${__dirname}/data/public/images/lunes.json`;
//   const data = JSON.parse(fs.readFileSync(filePath, ));
//   res.json(data);
// });

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);

});

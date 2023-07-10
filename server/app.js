import planetes from './data/planetes.json' assert { type: 'json' };
import lunes from './data/lunes.json' assert { type: 'json' };
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = [];

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/public')));


app.get('/planetes', (req, res) => {
  res.json(planetes);
});

app.get('/lunes', (req, res) => {
  res.json(lunes);
});


//Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Vérifie les informations d'identification
  const user = users.find((u) => u.email === email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Informations d\'identification invalides' });
  }

  // Générez un jeton d'authentification
  const token = jwt.sign({ email: user.email }, 'secretKey');

  // Renvoye le jeton en réponse
  res.json({ token });

  console.log('Utilisateur connecté avec succès', user.email)
});


//Signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Vérifie si l'utilisateur existe déjà
  const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
    return res.status(409).json({ message: 'Utilisateur existant' });
  }
  // Hache le mot de passe
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  // Crée un nouvel utilisateur
  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  // Générez un jeton d'authentification
  const token = jwt.sign({ email: newUser.email }, 'secretKey');

  res.json({ token });

 console.log('Utilisateur créé avec succès', newUser)
});


app.get('/planetes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const planeta = planetes.find((planeta) => planeta.id === id);
  if (planeta) {
    res.json(planeta);
  } else {
    res.status(404).json({ error: `Planeta ${id} no encontrado` });
  }
});

app.get('/data', (req, res) => {
  res.json(planetes);
});

app.get('/lunes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const luna = lunes.find((luna) => luna.id === id);
  if (luna) {
    res.json(luna);
  } else {
    res.status(404).json({ error: `Luna ${id} no encontrada` });
  }
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
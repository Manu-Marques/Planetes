import planetes from './data/planetes.json' assert { type: 'json' };
import lunes from './data/lunes.json' assert { type: 'json' };
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

const users = [];

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});


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

  // Renvoyez une réponse JSON avec le token et le message de succès
  res.status(200).json({ token, message: 'Connexion réussie' });
  console.log('Utilisateur connecté avec succès', user.email);
});




//Signup
app.post('/signup', (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  console.log(req.body);

  // Vérifie les informations d'identification
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Vérifie si l'utilisateur existe déjà
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'Utilisateur existant' });
  }
  // Hache le mot de passe
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Crée un nouvel utilisateur
  const newUser = { email, password: hashedPassword, firstName, lastName };
  users.push(newUser);

  // Générez un jeton d'authentification
  const token = jwt.sign({ email: newUser.email }, 'secretKey');
  console.log('Utilisateur créé avec succès', newUser)
  return res.status(200).json({ token, message: 'Utilisateur créé avec succès' });

  res.json({ token });

});


app.get('/planetes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const planete = planete.find((planeta) => planeta.id === id);
  if (planete) {
    res.json(planete);
  } else {
    res.status(404).json({ error: `Planète ${id} pas trouvée` });
  }
});

app.get('/data', (req, res) => {
  res.json(planetes);
});

app.get('/lunes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const lune = lunes.find((lune) => lune.id === id);
  if (lune) {
    res.json(lune);
  } else {
    res.status(404).json({ error: `Lune ${id} pas trouvée` });
  }
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
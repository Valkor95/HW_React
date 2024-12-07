import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(path.join(__dirname, '../publick')));

const sendImage = (filePath) => (req, res) => {
    const imagePath = path.join(__dirname, '../publick', filePath);
    res.sendFile(imagePath)
};

app.get('/', sendImage('CV.jpg'));
app.get('/swapi', sendImage('SWimg.png'));

let users = []


app.get('/todolist', (req, res) => {
    res.json(users);
});

app.post('/todolist', (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});


app.get('/todolist/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

app.put('/todolist/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(users[userIndex]);
});

app.delete('/todolist/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});


import "reflect-metadata"
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log(process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.get('/api/comments', (req, res) => {

    client.connect()
        .then(() => {
            const db = client.db('sample_mflix');
            return db.collection('comments').find().toArray();
        })
        .then(comments => {
            res.json(comments);
            client.close
        })
        
        .catch(error => {
            console.error('Errore:', error);
            res.status(500).json({ error: error.message });
            client.close();
        });
});

app.get('/api/movies', (req, res) => {

    client.connect()
        .then(() => {
            const db = client.db('sample_mflix');
            return db.collection('movies').find().toArray();
        })
        .then(comments => {
            res.json(comments);
            client.close
        })
        
        .catch(error => {
            console.error('Errore:', error);
            res.status(500).json({ error: error.message });
            client.close();
        });
});

app.get('/api/users', (req, res) => {

    client.connect()
        .then(() => {
            const db = client.db('sample_mflix');
            return db.collection('users').find().toArray();
        })
        .then(comments => {
            res.json(comments);
            client.close
        })
        
        .catch(error => {
            console.error('Errore:', error);
            res.status(500).json({ error: error.message });
            client.close();
        });
});
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`server in esecuzione su http://localhost:${PORT}`);
})



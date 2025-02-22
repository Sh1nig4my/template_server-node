import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Inizializza la connessione al database
AppDataSource.initialize()
    .then(() => {
        console.log("Connessione al database inizializzata con successo");
        
        // Configurazione delle rotte API
        app.get('/api/users', async (req, res) => {
            try {
                const userRepository = AppDataSource.getRepository(User);
                const users = await userRepository.find();
                res.json(users);
            } catch (error) {
                console.error("Errore durante il recupero degli utenti:", error);
                res.status(500).json({ error: "Errore interno del server" });
            }
        });

        // Altre rotte...
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server in esecuzione su http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Errore durante l'inizializzazione della connessione al database:", error);
    });
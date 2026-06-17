# Bibliothèque Numérique - Djenabou Diallo

Application web full-stack simulant une bibliothèque en ligne.

## Technologies utilisées

- **Frontend** : React, Vite, Axios, React Router
- **Backend** : Node.js, Express
- **Base de données** : MySQL (Railway)
- **Déploiement** : Railway, Render, Vercel

## Prérequis

- Node.js v18+
- MySQL

## Installation


### Backend
```bash
cd bibliotheque/server
npm install
node server.js
```

### Frontend
```bash
cd bibliotheque/client
npm install
npm run dev
```

## Variables d'environnement

Créer un fichier `.env` dans `bibliotheque/server` :

## Endpoints API

- `GET /api/livres` — Liste des livres disponibles
- `GET /api/livres/emprunts?email=` — Emprunts par utilisateur


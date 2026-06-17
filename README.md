# Bibliothèque Numérique - Djenabou Diallo

Application web de bibliothèque en ligne permettant de consulter les livres disponibles et de visualiser les emprunts par utilisateur.

## Technologies utilisées

- **Frontend** : React, Vite, Axios, React Router Dom
- **Backend** : Node.js, Express.js
- **Base de données** : MySQL
- **Tests** : Jest, Supertest, Cypress
- **Documentation** : Swagger

## Prérequis

- Node.js v18+
- MySQL

## Installation et lancement

### 1. Cloner le projet
```bash
git clone https://github.com/djenabou555555/Djenabou-Diallo-evaluation-finaleH26
```

### 2. Lancer le backend
```bash
cd bibliotheque/server
npm install
node server.js
```

### 3. Lancer le frontend
```bash
cd bibliotheque/client
npm install
npm run dev
```

## Fonctionnalités

- Consulter la liste des livres disponibles
- Rechercher les emprunts par email utilisateur

## Endpoints API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /api/livres | Liste des livres disponibles |
| GET | /api/livres/emprunts?email= | Emprunts d'un utilisateur |

## Documentation Swagger
http://localhost:5000/api-docs
## Déploiement

- **Frontend** : Vercel
- **Backend** : Render
- **Base de données** : Railway


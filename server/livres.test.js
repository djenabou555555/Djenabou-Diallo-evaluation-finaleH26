const request = require("supertest");
const express = require("express");

// On simule la BD pour ne pas avoir besoin de MySQL
jest.mock("./config/db", () => ({
    query: (sql, params, callback) => {
        // Si params est une fonction, c'est qu'il n'y a pas de params
        if (typeof params === "function") {
            params(null, [
                { id_livre: 1, titre: "Harry Potter", auteur: "J.K. Rowling" }
            ]);
        } else {
            callback(null, [
                { id_livre: 1, titre: "Harry Potter", auteur: "J.K. Rowling" }
            ]);
        }
    }
}));

const livresRoutes = require("./routes/livresRoutes");

const app = express();
app.use(express.json());
app.use("/api/livres", livresRoutes);

// Test 1 : GET /api/livres
test("GET /api/livres retourne status 200 et un tableau", async () => {
    const res = await request(app).get("/api/livres");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
});

// Test 2 : GET /api/livres/emprunts sans email
test("GET /api/livres/emprunts sans email retourne 400", async () => {
    const res = await request(app).get("/api/livres/emprunts");
    expect(res.statusCode).toBe(400);
});
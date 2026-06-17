 describe("Test E2E - Mes Emprunts", () => {

    it("Remplit le formulaire et affiche les emprunts", () => {

        // Ouvre la page emprunts
        cy.visit("http://localhost:5173/emprunts");

        // Vérifie le titre
        cy.contains("Mes emprunts").should("be.visible");

        // Remplit l'email
        cy.get("input[type='email']").type("jean.dupont@biblio.com");

        // Clique sur le bouton
        cy.get("button").click();

        // Vérifie que les emprunts s'affichent
        cy.get("h3").should("exist");
        cy.contains("Auteur").should("exist");
        cy.contains("Emprunt").should("exist");
        cy.contains("Retour prévu").should("exist");

    });
});

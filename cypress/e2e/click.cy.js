/// <reference types="cypress" />

describe('Kliknięcie w element na stronie', () => {
	it("Kliknięcie w zakładkę 'Contact us'", () => {
		cy.visit('/');
		// Pobranie elementu ze strony i kliknięcie w niego
		cy.get("a[title='Contact us']").click();
	});
});

/// <reference types='cypress' />

import Women from '../pages/Women';

describe('Test związany z zaznaczaniem checkboxa', () => {
	it('Kliknięcie w zakładkę Woman', () => {
		cy.visit('/');
		cy.get('a[title="Womann"]').click();
	});

	it('Zaznaczenie checkboxa w zakładce Woman', () => {
		Women.checkTops();
		Women.checkDresses();
		Women.checkSizes();
	});
});

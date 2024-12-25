/// <reference types='cypress' />

import Base from '../pages/base';
import Home from '../pages/home';

describe('Test związany z zaznaczaniem checkboxa', () => {
	it('Kliknięcie w zakładkę Women', () => {
		Base.openHomePage();
		Home.goToWomenSection();
		// Asercja - adres url powinien zawierać podaną wartość
		cy.url().should('include', 'id_category=3&controller=category');
	});

	it('Zaznaczenie checkboxa w zakładce Women', () => {
		cy.get('#layered_category_4').check();
		// Asercja - wybrany checkbox powinien być zaznaczony
		cy.get('#layered_category_4').should('be.checked');
		cy.get('#layered_category_8').check();
		// Asercja - wybrany checkbox powinien być zaznaczony
		cy.get('#layered_category_8').should('be.checked');

		cy.get('#ul_layered_id_attribute_group_1 input').check();
	});
});

/// <reference types='cypress' />

import Search from '../pages/Search';

describe('Wpisywanie tekstu w wyszukiwarkę', () => {
	it('Wpisywanie tekstu', () => {
		cy.visit('/');
		// Pobranie elementu input i wpisanie do niego frazy "Przykładowa treść"
		Search.typeSearchPhrase('LMAO');
		// Czekanie 3 sekund (3000ms)
		cy.wait(3000);
		// Pobranie elementu input i wyczyszczenie jego zawartości
		Search.clearSearchBar();
		cy.wait(3000);
		// Pobranie elementu input, wpisanie do niego frazy "Przykładowa treść" i kliknięcie przycisku ENTER
		cy.get('#search_query_top').type('Przykładowa treść {enter}');
	});
});

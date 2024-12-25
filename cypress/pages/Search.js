class Search {
	get searchBar() {
		return cy.get('#search_query_top');
	}

	typeSearchPhrase(phrase) {
		this.searchBar.type(phrase);
	}

	clearSearchBar() {
		this.searchBar.clear();
	}
}

export default new Search();

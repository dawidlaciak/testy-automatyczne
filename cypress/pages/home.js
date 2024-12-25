class Home {
	get womenTab() {
		return cy.get('a[title="Women"]');
	}

	goToWomenSection() {
		this.womenTab.click();
	}
}

export default new Home();

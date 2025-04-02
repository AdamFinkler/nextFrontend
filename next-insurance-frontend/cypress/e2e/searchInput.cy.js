 describe("Search Input Functionality", () => {

    
  beforeEach(() => {
    cy.visit("/");
  });


  it("should be visible and have the correct placeholder", () => {
    cy.get(".search-input")
      .should("be.visible")
      .and("have.attr", "placeholder", "Search...");
  });


  it("should accept text input", () => {
    const searchText = "Cypress testing";
    cy.get(".search-input").type(searchText).should("have.value", searchText);
  });


  it("does not find results when spamming random text into the search bar", () => {
    const searchText = "Cypress testing";
    cy.get(".search-input")
      .type(searchText)
      .should("have.value", searchText)
      .type("{enter}");
    

    cy.get(".error-handler-wrapper", { timeout: 10000 })
      .should("exist")
      .and("contain.text", "no results found for")
      .and("contain.text", "Cypress testing")
      .and("contain.text", "back to home page");
  });
});

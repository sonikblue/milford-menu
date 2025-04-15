// https://docs.cypress.io/api/introduction/api.html

// TODO: Have it build the app in "test mode", with a fixed (file?) menu
// TODO: Assert against actual menu items
describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Milford Menu");
  });
});

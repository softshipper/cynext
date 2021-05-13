
describe("E2E testing /", () => {
    before(() => {
        cy.visit("http://localhost:8080/");
    });


    context("initialize", () => {
        it("should show hello world.", () => {
            cy.contains("hello world");
        });
    });


});
import "./commands";

beforeEach(() => {
  cy.addToDOs([
    {
      title: "feed the dog",
      completed: false,
      id: Date.now(),
    },
    {
      title: "take the dog out",
      completed: false,
      id: Date.now(),
    },
  ]);

  cy.viewport(1920, 1080);
  cy.visit("/examples/vanillajs/");
});

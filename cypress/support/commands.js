Cypress.Commands.add(
  "pressEnterInInput",
  { prevSubject: "optional" },
  (subject, selector) => {
    cy.get(subject.selector || selector)
      .should("be.visible")
      .type(`{enter}`);
  }
);

Cypress.Commands.add("enterValue", (selector, value) => {
  cy.get(selector).should("be.visible").type(value);
});

Cypress.Commands.add(
  "assertElementContainsText",
  (selector, itemFromList, text) => {
    cy.get(selector).eq(itemFromList).should("contain", text);
  }
);

Cypress.Commands.add("assertElementsInListCount", (selector, count) => {
  cy.get(selector).should("have.length", count);
});

Cypress.Commands.add("checkElementInList", (selector, elementToCheck) => {
  cy.get(selector).eq(elementToCheck).check();
});

Cypress.Commands.add(
  "assertIfElementInListIsToggled",
  (selector, checkedElement) => {
    cy.get(selector).eq(checkedElement).should("have.class", "completed");
  }
);

Cypress.Commands.add("addToDOs", (objs) => {
  const arr = [];

  objs.forEach((obj) => arr.push(obj));

  window.localStorage.setItem("todos-vanillajs", JSON.stringify(arr));
});

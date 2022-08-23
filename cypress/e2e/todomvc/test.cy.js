import selectors from "../../selectors/landingPage";

let TODO_ITEM_ONE = "buy some cheese";
let TODO_ITEM_TWO = "feed the cat";

describe("Testing ToDo landing page", () => {
  it("add new ToDOs", () => {
    cy.enterValue(selectors.inputField, TODO_ITEM_ONE)
      .pressEnterInInput()
      .enterValue(selectors.inputField, TODO_ITEM_TWO)
      .pressEnterInInput();
    cy.assertElementsInListCount(selectors.listItems, 4);
    cy.assertElementContainsText(selectors.listItems, 2, TODO_ITEM_ONE);
    cy.assertElementContainsText(selectors.listItems, 3, TODO_ITEM_TWO);
  });

  it("Check element from the list", () => {
    cy.checkElementInList(selectors.checkBoxes, 0);
    cy.assertIfElementInListIsToggled(selectors.listItems, 0);
  });
});

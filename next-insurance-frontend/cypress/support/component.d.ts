
declare namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React component for component testing.
       * @example cy.mount(<MyComponent />)
       */
      mount: typeof import("cypress/react").mount;
    }
  }
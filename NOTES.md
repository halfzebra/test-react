# NOTES

The complete implementation took me a bit over 4~ hours.

## Focus areas

- Improve the test coverage of calculator by adding a test suite covering all permutations of the configuration.

  _TODO:_ there's more test to be written, so maybe in the future we need to consider generating tests programmatically for  possible inputs.

- The React app was stripped into a bunch of smaller components, which are easy to maintain.

- Form is reworked using [react-hook-form](https://react-hook-form.com/) and [yup](https://github.com/jquense/yup) to provide a reliable point for further development
  Formik might have been a better alternative, but with the help of TypeScript we can achieve a pretty good level of reliability.

- Since we're already using Bootstrap, the rest of the functionality is relying on it as well to follow brand design.

## Next steps

- Consider a better alternative instead of including the whole Bootstrap
- Adding more tests for the Calculator and React components
- Add an integration test using Cypress or Playwright
- Provide more human-readable error messages for form validation
- Investigate possible options for form validation, which can derive the TS type from the shape of the validator
- Add ESLint and Prettier as scripts
- Feature to remove items from cart
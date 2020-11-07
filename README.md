# React Testing

![React Testing](https://blog.rocketseat.com.br/content/images/2020/08/introducao-a-testing-library-testando-componentes-react.png)

_Course material for testing React components using react-testing-library, by Kent C. Dodds_

## Folder structure

```
react-testing
└───src
    └─── __tests__
│   │   │ 
│   │   │ (test files)
│   │
│   │ (component files)
```

## Test files

- `react-dom.js` - Render a React component for testing
- `jest-dom.js` - Use jest-dom for improved assertions
- `dom-testing-library.js` - Use dom-testing-library to write more maintainable
  React tests
- `react-testing-library.js` - Use react-testing-library to render and test
  React Components
- `localized.js` - Testing localized content with react-testing-library
- `state.js` - Test React Component state changes with react-testing-library
- `prop-updates.js` - Test prop updates with react-testing-library
- `a11y.js` - Test accessibility of rendered React Components with jest-axe
- `dependency-injection.js` - Mock HTTP Requests with Dependency Injection in
  React Component Tests
- `http-jest-mock.js` - Mock HTTP Requests with jest.mock in React Component
  Tests
- `mock-component.js` - Mock react-transition-group in React Component Tests
  with jest.mock
- `error-boundaries.js` - Test componentDidCatch handler error boundaries with
  react-testing-library
- `tdd-markup.js` - Test drive the development of a React Form with
  react-testing-library
- `tdd-functionality.js` - TDD the functionality of a React Form with
  react-testing-library
- `react-router.js` - Test react-router Provider history object in React
  Component Tests with createMemoryHistory
- `redux.js` - Test a redux connected React Component
- `custom-hook.js` - Test a custom hook
- `portals.js` - Test React portals
- `unmounting.js` - Test Unmounting a React Component with react-testing-library
- `app.js` - Testing the full application.

## How do I start?

1. Fork this project

![Forking the project](https://camo.githubusercontent.com/6f03010c651d060f8b7cfc17da7098c1757c4ead/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

2. Clone the forked repository

    `git clone https://github.com/user/react-testing` (if you use `git`)

    or

    `gh repo clone https://github.com/user/react-testing` (if you use `gh` cli)

3. Install the dependencies

    `npm install` (if you use `npm`)

    or

    `yarn` (if you use   `yarn`)

4. Start the project

    `npm start` (if you `npm`)

    or

    `yarn start` (if you use `yarn`)

## How to contribute?

See the [CONTRIBUTING.md](./CONTRIBUTING.md) file to see the step about how to contribute.

---

[LICENSE](./LICENSE)

_Credits: Kent C. Dodds_

// 0⃣ 🐨 you'll need these:
import { render, fireEvent } from '@testing-library/react';
import { HiddenMessage } from '../hiddenMessage';

// Our component uses a react animation library called react-transition-group.
// By its nature, this library does some interesting things to keep an element
// in the DOM as it's transitioning out which force us to account for those
// in our test. This is really an implementation detail and it is kind of
// annoying. So let's mock out that library to make our tests faster to run
// and easier to write while still getting the confidence that we're hoping for.

// If you look at the hidden-message module we're importing, it only uses the
// `CSSTransition` component from the react-transition-group module. So in
// our mock module factory function that's all we need to return
// 7⃣ 🐨 use jest.mock to mock out the react-transition-group component
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => props.in ? props.children : null
  }
})
// 📖 https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options

test('shows hidden message when toggle is clicked', () => {
  // 1⃣ 🐨 render the HiddenMessage component with any message you want
  // 2⃣ 🐨 get the toggle button
  // 💯 (use getByText)
  const myMsg = 'Hello, world!';
  const { getByText, queryByText, container } = render(<HiddenMessage>{myMsg}</HiddenMessage>);
  const toggleBtn = getByText("Toggle"); // or /toggle/i
  // 3⃣ 🐨 assert that the text you want to render is not in the document
  // 💯 (use `queryByText` and `not.toBeInTheDocument`)
  // 📖 https://github.com/gnapse/jest-dom#tobeinthedocument
  expect(queryByText(myMsg)).not.toBeInTheDocument();
  // 4⃣ 🐨 Use `fireEvent` to click on the button:
  // 📖 https://github.com/kentcdodds/react-testing-library/blob/b18ff5b96210a887e784b9f53bd886e11b6ed5e0/README.md#fireeventnode-htmlelement-event-event
  fireEvent.click(toggleBtn);
  // 5⃣ 🐨 assert that your message is in the docuemnt
  expect(queryByText(myMsg)).toBeInTheDocument();
  // 6⃣ 🐨 click on the button again
  fireEvent.click(toggleBtn);
  // 8⃣ 🐨 assert that your message is not in the document anymore
  expect(queryByText(myMsg)).not.toBeInTheDocument();
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=mock-component&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

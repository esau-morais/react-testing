// 0⃣ 🐨 you're going to need these
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadGreeting as mockLoadGreeting } from '../api';
import { GreetingLoader } from '../greetingLoader01Mocking';

// our component makes an HTTP request when you click on the load button.
// we don't want it to do this for various reasons, so instead we'll mock
// the module responsible for making that HTTP call to have it return
// a fake version of what we want it to return.
// 4⃣ 🐨 use jest.mock to mock the '../api' module
jest.mock('../api');

// 👀 notice this as an async test:
test('loads greetings on click', async () => {
  const testGreeting = 'Hi';
  // 1⃣ 🐨 render the GreetingLoader component
  render(<GreetingLoader />);
  // 2⃣ 🐨 set the name input's value to whatever you like
  const nameInput = screen.getByLabelText("Name"); // or /name/i
  userEvent.type(nameInput, 'Esaú');
  // 3⃣ 🐨 use userEvent to click on the load button
  const loadBtn = screen.getByText("Load Greeting"); // or /loading greeting/i
  userEvent.click(loadBtn);
  // 5⃣ 🐨 make an assertion that your mocked loadGreeting function was called once
  // and that it was called with the value you set to the name input's value.
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
  expect(mockLoadGreeting).toHaveBeenCalledWith('Esaú');
  // 6⃣ 🐨 use react-testing-library's `wait` utility to wait until the `greeting`
  // node has the correct text content.
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: testGreeting}})
  await waitFor(() =>
    expect(screen.getByTestId(/greeting/i).textContent).toBe(testGreeting)
  )
  // 📖 https://github.com/kentcdodds/react-testing-library/blob/b18ff5b96210a887e784b9f53bd886e11b6ed5e0/README.md#wait
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=http-jest-mock&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

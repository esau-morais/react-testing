// 🐨 you'll need to import the fireEvent utility from @testing-library/react
import { render, fireEvent } from '@testing-library/react';
import { FavoriteNumber } from '../favoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 you're going to need getByTestId (see the favorite-number file and note the data-test attribute).
  const { getByLabelText, getByTestId } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i) // or "Favorite Number"
  // 🐨 let's use fireEvent.change to fire a change event on the input to change the value to 10
  fireEvent.change(input, { target: { value: 10 } })
  // 📖 learn more here: https://github.com/kentcdodds/react-testing-library/blob/61e382f10d2d8d0be458103b7c267101541ed952/README.md#fireeventnode-htmlelement-event-event

  // 🐨 verifies the node with the test ID of 'error-message' has text "The number is invalid"
  // debug()
  expect(getByTestId('error-message')).toBeInTheDocument()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=state&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

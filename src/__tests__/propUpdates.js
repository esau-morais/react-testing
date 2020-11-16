import { render, fireEvent } from '@testing-library/react';
import { FavoriteNumber } from '../favoriteNumber';

test('entering an invalid value shows an error message', () => {
  // 🐨 you'll need to add queryByTestId, and rerender
  // 📖 learn how queryBy* queries differ from getBy* queries: https://github.com/kentcdodds/react-testing-library/blob/61e382f10d2d8d0be458103b7c267101541ed952/README.md#query-apis
  const { getByLabelText, getByTestId, queryByTestId, rerender } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i) // or "Favorite Number"
  fireEvent.change(input, { target: { value: 10 } })
  expect(getByTestId('error-message')).toHaveTextContent(
    /the number is invalid/i,
  )
  // 🐨 call rerender with the FavoriteNumber and a max prop of 10.
  rerender(<FavoriteNumber max={10} />)
  // 🐨 use the queryByTestId to verify that the 'error-message' node is not rendered.
  expect(queryByTestId('error-message')).toBeNull()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=prop-updates&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

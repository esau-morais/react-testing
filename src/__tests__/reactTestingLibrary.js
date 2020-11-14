import '@testing-library/jest-dom/extend-expect';
// 🐨 you'll need to import the render function from '@testing-library/react'
import { render } from '@testing-library/react';
import { FavoriteNumber } from '../favoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 remove this div (render will make one for you)
  const div = document.createElement('div')
  // 📖 read docs here: https://github.com/kentcdodds/react-testing-library/blob/master/README.md#render
  const { getByLabelText } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i) // or "Favorite Number"
  expect(input).toHaveAttribute('type', 'number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-testing-library&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

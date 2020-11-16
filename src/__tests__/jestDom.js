import ReactDOM from 'react-dom';
import { FavoriteNumber } from '../favoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 change this to use jest-dom's `toHaveAttribute` assertion
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  // 🐨 change this to use jest-dom's `toHaveTextContent` assertion
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=jest-dom&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

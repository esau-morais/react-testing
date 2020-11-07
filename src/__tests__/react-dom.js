// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
import ReactDOM from 'react-dom';
// 🐨 Here's your component:
import { FavoriteNumber } from '../favoriteNumber'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  const container = document.createElement('div')
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  ReactDOM.render(<FavoriteNumber />, container)
  // 🐨 assert the input type attribute is a number
  const input = container.querySelector('input')
  expect(input.type).toBe('number')
  // 🐨 assert the label's text content is "Favorite Number"
  const label = container.querySelector('label')
  expect(label.textContent).toBe('Favorite Number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-dom&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

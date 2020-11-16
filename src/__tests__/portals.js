// 0⃣ 🐨 you'll need these
import { render, within } from '@testing-library/react';
import { Modal } from '../modal';

test('modal shows the children', () => {
  // 1⃣ 🐨 render the modal with anything you want as the children
  render(
    <Modal>
      <h1>Hello, world!</h1>
    </Modal>
  )
  // 2⃣ 🐨 add an assertion that what you want is in the document.
  const modalEl = document.getElementById('modal-root');
  const { getByText } = within(modalEl);
  expect(getByText('Hello, world!')).toBeInTheDocument();
  // debug();
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=portals&em=esaumorais7@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

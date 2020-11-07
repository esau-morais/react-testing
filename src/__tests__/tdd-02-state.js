// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import {render} from 'react-testing-library'
import {Editor} from '../post-editor'

test.skip('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<Editor />)
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  getByLabelText(/tags/i)
  getByText(/submit/i)
  // 🐨 click the submit button
  // 🐨 verify that the submit button is disabled when clicked
})

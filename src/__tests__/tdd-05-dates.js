// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import {render, fireEvent, wait} from 'react-testing-library'
import {Redirect as MockRedirect} from 'react-router'
import {savePost as mockSavePost} from '../api'
import {Editor} from '../post-editor'

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

jest.mock('../api', () => {
  return {
    savePost: jest.fn(() => Promise.resolve()),
  }
})

afterEach(() => {
  MockRedirect.mockClear()
  mockSavePost.mockClear()
})

// 🐨 unskip this test
test.skip('renders a form with title, content, tags, and a submit button', async () => {
  const fakeUser = {id: 'user-1'}
  const {getByLabelText, getByText} = render(<Editor user={fakeUser} />)
  const fakePost = {
    title: 'Test Title',
    content: 'Test content',
    tags: ['tag1', 'tag2'],
  }
  // 🐨 save the current date here (use Date.now())
  getByLabelText(/title/i).value = fakePost.title
  getByLabelText(/content/i).value = fakePost.content
  getByLabelText(/tags/i).value = fakePost.tags.join(', ')
  const submitButton = getByText(/submit/i)

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledTimes(1)
  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    // 🐨 verify that this also as a `date` property that is a string (expect.any(String))
    authorId: fakeUser.id,
  })

  // 🐨 get the current date now (Date.now())
  // 🐨 verify that the date mockSavePost was called with is less than the
  // preDate and greater than the postDate
  // 💯 get the date mockSavePost was called with via:
  //   new Date(mockSavePost.mock.calls[0][0].date).getTime()
  // use toBeGreaterThanOrEqual and toBeLessThanOrEqual

  await wait(() => expect(MockRedirect).toHaveBeenCalledTimes(1))

  expect(MockRedirect).toHaveBeenCalledWith({to: '/'}, {})
})

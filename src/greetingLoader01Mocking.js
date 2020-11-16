import { useState } from 'react';
import { loadGreeting } from './api';

function GreetingLoader() {
  const [greeting, setGreeting] = useState('Hi');
  async function loadGreetingForInput(e) {
    e.preventDefault()
    const { data } = await loadGreeting(e.target.elements.name.value) || {}
    setGreeting(data?.greeting)
  }
  return (
    <form onSubmit={loadGreetingForInput}>
      <label htmlFor="name">Name</label>
      <input id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting" data-testid="greeting">{greeting}</div>
    </form>
  )
}

export { GreetingLoader }

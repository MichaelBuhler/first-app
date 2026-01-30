import { createRoot } from 'react-dom/client'

function App() {
  return <div>Hello, world!</div>
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}

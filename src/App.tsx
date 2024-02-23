import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import { GlobalCss } from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

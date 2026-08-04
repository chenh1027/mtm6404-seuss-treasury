import { Link, Route, Routes } from 'react-router-dom'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import Quotes from './pages/Quotes'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/books">Books</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  )
}

export default App
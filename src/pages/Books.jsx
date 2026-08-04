import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://lustrous-profiterole-958625.netlify.app/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data.books)
      })
  }, [])

  return (
    <main>
      <h1>Books</h1>

      <div className="books">
        {books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <img
              src={`https://lustrous-profiterole-958625.netlify.app${book.coverImage}`}
              alt={book.title}
            />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Books
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://lustrous-profiterole-958625.netlify.app/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data)
      })
  }, [id])

  return (
    <main>
      {book && (
        <article className="book-details">
          <h1>{book.title}</h1>

          <img
            src={`https://lustrous-profiterole-958625.netlify.app${book.coverImage}`}
            alt={book.title}
          />

          <p>{book.summary}</p>
        </article>
      )}
    </main>
  )
}

export default BookDetails
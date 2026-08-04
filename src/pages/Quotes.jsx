import { useEffect, useState } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://lustrous-profiterole-958625.netlify.app/api/quotes/random')
      .then(response => response.json())
      .then(data => {
        setQuotes(data.quotes)
      })
  }, [])

  return (
    <main>
      <h1>Quotes</h1>

      <ul className="quotes">
        {quotes.map(quote => (
          <li key={quote.id}>
            <p>"{quote.text}"</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Quotes
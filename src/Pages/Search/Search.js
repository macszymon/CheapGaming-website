import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import './Search.css'

function Search() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {input} = useParams()
  const navigate = useNavigate()

  async function fetchResults() {
    const res = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${input}`)
    const data = await res.json()
    setResults(data)
    setLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchResults()
    console.log(input);
  }, [input])


  return (
    loading ? '' :
    <main className="search">
        <h2 className="search__title">{'Games - search: "' + input + '"' }</h2>
        <h3 className="search__found">{`We found ${results.length} results`}</h3>
        <div className="search__results">
            {results.map((result) => (
                <div className="result" onClick={() => navigate(`/game/${result.gameID}`)}>
                    <div className="result__left">
                        <img src={result.thumb} alt="" className="result__img" />
                        <h4 className="result__title">{result.external}</h4>
                    </div>
                    <div className="result__right">
                        <h4 className="result__price">${result.cheapest}</h4>
                        <button className="result__btn btn btn--small" onClick={() => navigate(`/game/${result.gameID}`)}>Compare Prices</button>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Search
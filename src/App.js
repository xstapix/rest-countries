import { useEffect, useState } from 'react';
import './App.sass';

function App() {
  const [countries, setCountries] = useState()
  const [filtered, setFiltered] = useState()
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setFiltered(data)})
      .catch(error => console.log('Rest-API error...', error))
  }, [])

  const handleFilter = (region) => {
    if (region == 'All') {
      setFiltered(countries) 
    } else {
      const newFilter = countries.filter(item => item.region === region)
      setFiltered(newFilter)
    }
  }

  const handleSearch = (inputSearch) => {
    const newFilter = countries.filter(item => 
      item.name.common.toLowerCase().includes(inputSearch.toLowerCase()))
    setFiltered(newFilter)
  }

  const dropFilter = () => {
    document.getElementById('filterDropDown').classList.toggle("active")
  }

  const handleTheme = () => {
    theme === true ? setTheme(false) : setTheme(true)
  }

  return (
    <div className="App">
      <header>
        <div className='container'>
          <p className='where_in_the_world'>Where in the world?</p>
          <div className='mode' onClick={handleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" className="moon-icon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <p>Dark Mode</p>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <input 
            className='search' 
            type='text'
            placeholder='Search a country...'
            onChange={(event) => handleSearch(event.target.value)}/>
          <div className='filter' onClick={dropFilter}>
            Filter by Region
            <ul className='filterDropDown' id='filterDropDown'>
              <li onClick={() => handleFilter('All')}>All</li>
              <li onClick={() => handleFilter('Africa')}>Africa</li>
              <li onClick={() => handleFilter('Americas')}>America</li>
              <li onClick={() => handleFilter('Asia')}>Asia</li>
              <li onClick={() => handleFilter('Europe')}>Europe</li>
              <li onClick={() => handleFilter('Oceania')}>Oceania</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <div className='countries'>
          {filtered ? filtered.map(item => (
            <div className='countrie' key={item.name.common}>
              <img src={item.flags.svg} alt='flag' className='flagIMG'/>
              <div>
                <p className='name'>{item.name.common}</p>
                <p className='info'>Population: <span>{item.population} </span></p>
                <p className='info'>Region: <span>{item.region}</span></p>
                <p className='info'>Capital: <span>{item.capital}</span></p>
              </div>
            </div>
            )) : ('Loading...')}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

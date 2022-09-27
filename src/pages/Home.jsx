import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import '../App.sass';

const Home = () => {
  const [countries, setCountries] = useState()
  const [filtered, setFiltered] = useState()

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setFiltered(data)})
      .catch(error => console.log('Rest-API error...', error))
  }, [])

  const handleFilter = (region) => {
    if (region === 'All') {
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

  return (
    <main>
      <div className='container Df_JCsb'>
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
        <div className='countries Df_JCsb'>
        {filtered ? filtered.map(item => (
          <Link to={`/country/${item.name.common}`} className='country' key={item.name.common}>
            <img src={item.flags.svg} alt='flag' className='flagIMG'/>
            <div>
              <p className='name'>{item.name.common}</p>
              <p className='info'>Population: <span>{item.population} </span></p>
              <p className='info'>Region: <span>{item.region}</span></p>
              <p className='info'>Capital: <span>{item.capital}</span></p>
            </div>
          </Link>
          )) : ('Loading...')}
        </div>
      </div>
    </main>
  );
}

export {Home}
import '../App.sass'
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Country = () => {
  const {countryName} = useParams()
  const [countryData, setCountryData] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => response.json())
      .then(data => setCountryData(data))
      .catch(error => console.log('Rest-API error...', error))
  }, [countryName]);

  return (
    <main>
      <div className='container'>
        <Link to='/' className='back'>
          <svg xmlns="http://www.w3.org/2000/svg" className="backSVG" viewBox="0 0 512 512"><title>Arrow Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
          <p>Back</p>
        </Link>
        <div className='country-info Df_JCsb'>
          {countryData ? 
            <>
              <img alt='flag' className='country_flag' src={countryData[0].flags.svg}/>
              <section>
                <h1>{countryData[0].name.common}</h1> 
                <div className='Df_JCsb'>
                  <div>
                    <p className='info description'>Native Name: <span>{countryData[0].name.common}</span></p>
                    <p className='info description'>Population: <span>{countryData[0].population}</span></p>
                    <p className='info description'>Region: <span>{countryData[0].region}</span></p>
                    <p className='info description'>Sub Region: <span>{countryData[0].subregion}</span></p>
                    <p className='info description'>Capital: <span>{countryData[0].capital}</span></p>
                  </div>
                  <div className='other-info'>
                    {/* <p className='info description'>Top Level Domain: <span>{countryData[0].tld}</span></p> */}
                    {/* <p className='info description'>Currencies: <span>{countryData[0].currencies.GTQ.name}</span></p> */}
                    {/* <p className='info description'>Languages: <span>{countryData[0].languages.spa}</span></p> */}
                  </div>
                </div>
                {/* <p className='info description border-countries'>
                  Border Countries: <span></span>
                  <span></span> 
                </p> */}
              </section>
            </>
          : ("loading...")}
        </div>
      </div>
    </main>
  )
}

export {Country}
import './Country.sass'
import {Link} from 'react-router-dom'

const Country = () => {
  return (
    <main>
      <div className='container'>
        <Link to='/' className='back'> <img alt='back' src='../image/moon-outline.svg'/>Back</Link>
        <div className='country-info Df_JCsb'>
          <img className='country_flag' src='https://flagcdn.com/gt.svg'/>
          <section>
            <h1>Belgium</h1>
            <div className='Df_JCsb'>
              <div>
                <p className='info description'>Native Name: <span>gfd</span></p>
                <p className='info description'>Population: <span>11 111 423</span></p>
                <p className='info description'>Region: <span>gfd</span></p>
                <p className='info description'>Sub Region: <span>gfd</span></p>
                <p className='info description'>Capital: <span>gfd</span></p>
              </div>
              <div>
                <p className='info description'>Top Level Domain: <span>gfd</span></p>
                <p className='info description'>Currencies: <span>gfd</span></p>
                <p className='info description'>Languages: <span>gfd</span></p></div>
            </div>
            <p className='info description border-countries'>
              Border Countries: <span>France</span>
              <span>France</span> 
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export {Country}
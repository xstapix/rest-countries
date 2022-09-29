import {Routes, Route, Link} from 'react-router-dom'

import './App.sass';
import './pages/media-style.sass';
import {Country} from './pages/Country'
import {Countries} from './pages/Countries'

function App() {

  const handleTheme = () => {
    let theme = document.getElementById('theme')

    if(theme.getAttribute('href') === 'light.css') {
      theme.href = 'dark.css'
    } else {
      theme.href = 'light.css'
    }
  }

  return (
    <>
      <header>
        <div className='container header_Df_JCsb'>
          <Link to='/' className='where_in_the_world'>Where in the world?</Link>
          <div className='mode' onClick={handleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" className="moon-icon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <p>Dark Mode</p>
          </div>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path='/country/:countryName' element={<Country/>}/>
      </Routes>
    </>
  );
}

export default App;

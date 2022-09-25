import {Routes, Route, Link} from 'react-router-dom'

import './App.sass';
import {Country} from './pages/Country'
import {Home} from './pages/Home'

function App() {

  return (
    <>
      <div className="App">
        <header>
          <div className='container Df_JCsb'>
            <Link to='/' className='where_in_the_world'>Where in the world?</Link>
            <div className='mode'>
              <svg xmlns="http://www.w3.org/2000/svg" className="moon-icon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
              <p>Dark Mode</p>
            </div>
          </div>
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country' element={<Country/>}/>
      </Routes>
    </>
  );
}

export default App;

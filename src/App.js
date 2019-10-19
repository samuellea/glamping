import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Error from './components/Error';
import NavigationBar from './components/Navbar';
import './styles/style.css';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Router>
        <Home path='/' />
        <SearchPage path='/search' />
        <Error default />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages';
import Product from './pages/product';

const App = () => {
  return (
    <Router>
      <Routes>
    <Route exact path='' element={<Home/>} ></Route>
    <Route exact path='/product' element={<Product/>} ></Route>

    </Routes>
    </Router>
  )
}

export default App
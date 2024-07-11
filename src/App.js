/* import logo from './logo.svg'; */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard/Dashboard';
import AddProduct from './page/AddProduct/AddProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Dashboard />} />
        <Route path='/add/product' element={< AddProduct />} />
      </Routes>

    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './page/ManageProduct/AddProduct';
import Dashboard from './page/Dashboard';
import DashboardHome from './page/DashboardHome/DashboardHome';
import ManageProduct from './page/ManageProduct/ManageProduct';
import ManageCategory from './page/ManageCategory/ManageCategory';
import ManageSubCategory from './page/ManageSubCategory/ManageSubCategory';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />

          <Route path='/product/manage' element={< ManageProduct />} />
          <Route path='/product/add' element={< AddProduct />} />

          <Route path='/category/manage' element={< ManageCategory />} />
          <Route path='/subcategory/manage' element={< ManageSubCategory />} />

        </Route>
      </Routes>

    </>
  );
}

export default App;

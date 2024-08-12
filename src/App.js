import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './page/ManageProduct/AddProduct';
import Dashboard from './page/Dashboard';
import DashboardHome from './page/DashboardHome/DashboardHome';
import ManageProduct from './page/ManageProduct/ManageProduct';
import ManageCategory from './page/ManageCategory/ManageCategory';
import ManageSubCategory from './page/ManageSubCategory/ManageSubCategory';
import SignIn from './page/Auth/SignIn';
import SignUp from './page/Auth/SignUp';
import AdminMiddleware from './component/middleware/AdminMiddleware';


function App() {
  return (
    <>
     

      <Routes>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />}/>

        <Route path="/" element={<AdminMiddleware><Dashboard /></AdminMiddleware>}>
        <Route index element={<AdminMiddleware><DashboardHome /></AdminMiddleware>} />

          <Route path='/product/manage' element={<AdminMiddleware>< ManageProduct /></AdminMiddleware>} />
          <Route path='/product/add' element={<AdminMiddleware>< AddProduct /></AdminMiddleware>} />

          <Route path='/category/manage' element={<AdminMiddleware>< ManageCategory /></AdminMiddleware>} />
          <Route path='/subcategory/manage' element={<AdminMiddleware>< ManageSubCategory /></AdminMiddleware>} />

        </Route>
      </Routes>

    </>
  );
}

export default App;

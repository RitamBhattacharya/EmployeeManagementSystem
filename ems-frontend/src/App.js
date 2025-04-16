import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import DeleteEmployeeComponent from './components/DeleteEmployeeComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/employees' element={<ListEmployeeComponent />} />
            <Route path='/add-employee' element={<AddEmployeeComponent />} />
            <Route path='/edit-employee/:id' element={<UpdateEmployeeComponent />} />
            <Route path='/delete-employee/:id' element={<DeleteEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;

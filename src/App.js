import './App.css';
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/reg' element={<RegistrationPage/>}></Route>
        <Route path='/auth' element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;

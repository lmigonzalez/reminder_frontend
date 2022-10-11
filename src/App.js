import './App.css';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home';
import NewCard from './pages/Home/NewCard';
import EditCard from './pages/Home/EditCard';
import Login from './pages/Home/Login';
import SignUp from './pages/Home/SignUp';
import NotFound from './pages/Home/NotFound';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-card' element={<NewCard/>}></Route>
        <Route path='/edit-card' element={<EditCard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

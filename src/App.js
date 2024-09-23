import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Component/PageNotFound';
import Tasks from './Component/Tasks';
import Leaves from './Component/Leaves';
import Messages from './Component/Messages';



function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      <Route path="/leaves" element={<Leaves/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


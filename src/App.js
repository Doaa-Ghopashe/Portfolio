import './App.css';
import Navbar from './components/Navbar';
import SideLinks from './components/SideLinks';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../node_modules/jquery/dist/jquery.js";

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectProvider , {ProfileProvider}from './context/ProjectContext';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProfileProvider>
        <SideLinks/>
      </ProfileProvider>
      
      <Routes >
        
          <Route path='/' element={<ProjectProvider><Home/><Spinner/></ProjectProvider>}/>
          <Route path='About' element={<ProfileProvider><Spinner/><About/></ProfileProvider>}/>
          <Route path='Projects' element={<ProjectProvider><Spinner/><Projects/></ProjectProvider>}/>
          
        
      </Routes>
    </div>
  );
}

export default App;

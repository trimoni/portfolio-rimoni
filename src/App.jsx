import './App.css';
import NavBar from './component/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <main>
    <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </main>
  );
}

export default App;

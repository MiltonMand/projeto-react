import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Contact from './components/Contact';
import MyProject from './components/MyProject';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/company'>Company</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/myproject'>MyProjects</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myproject' element={<MyProject />} />
      </Routes>
    </Router>
  );
}

export default App;

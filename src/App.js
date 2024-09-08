import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Company from './componentes/pages/Company';
import Contact from './componentes/pages/Contact';
import MyProject from './componentes/pages/MyProject';

import Conteiner from './componentes/layout/Conteiner';
import NavBar from './componentes/layout/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Conteiner customClass='min-height'>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/myproject' element={<MyProject />} />
        </Routes>
      </Conteiner>
    </Router>
  );
}

export default App;

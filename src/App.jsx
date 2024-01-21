import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/home';


const App = () => {
  return (
    <>
      <NavBar/>
      <Container >
        <Routes>        
            <Route path="/"  element={<Home/>} />
            <Route path="/contact"  element={<Contact />}/>
            <Route path="/about"  element={<About/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;

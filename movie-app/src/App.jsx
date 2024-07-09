import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import WatchList from './pages/watch-list';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

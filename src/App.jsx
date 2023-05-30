import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

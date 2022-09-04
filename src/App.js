import { Routes, Route } from 'react-router-dom';

import { Store } from './pages/Store';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route index element={<Store />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
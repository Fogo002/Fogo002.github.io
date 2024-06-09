
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Atividades from './pages/Atividades/Atividades';
import Contactos from './pages/Contactos/Contactos';


function App() {



  return (<>
    
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Navbar></Navbar>
              <HomePage />
              <Footer></Footer>
            </>
          } />

          <Route path='/atividades' element={
            <>
              <Navbar></Navbar>
              <Atividades />
              <Footer></Footer>
            </>
          } />

          <Route path='/contacto' element={
            <>
              <Navbar></Navbar>
              <Contactos />
              <Footer></Footer>
            </>
          } />


        </Routes>

      </BrowserRouter>
    
  </>
  );
}

export default App;
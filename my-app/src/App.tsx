
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Atividades from './pages/Atividades/Atividades';
import Contactos from './pages/Contactos/Contactos';
import Jogos from './pages/Jogos/Jogos';
import Constituicao from './pages/Constituicao/Constituicao';
import FAQ from './pages/FAQ/FAQ';


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

        <Route path='/jogos' element={
          <>
            <Navbar></Navbar>
            <Jogos />
            <Footer></Footer>
          </>
        } />

        <Route path='/constituicao' element={
          <>
            <Navbar></Navbar>
            <Constituicao />
            <Footer></Footer>
          </>
        } />

        <Route path='/faq' element={
          <>
            <Navbar></Navbar>
            <FAQ />
            <Footer></Footer>
          </>
        } />

        <Route path='*' element={<Navigate to="/" replace />} />

      </Routes>

    </BrowserRouter>

  </>
  );
}

export default App;
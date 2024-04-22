import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About'
import Woof from './views/Woof/Woof'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import S from './App.styled'
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <S.AppContainer>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/woof" element={<Woof />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </S.AppContainer>
  );
}

export default App;

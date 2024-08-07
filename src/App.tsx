import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import DetailsProduct from './pages/DetailsProduct/DetailsProduct'
import ScrollToTop from './components/ScrollToTop'
import Shop from './pages/Shop/Shop'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {  
  return (
    <>
      <Router>
        <Header/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details/:id' element={<DetailsProduct/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
        </Routes>        
        <Footer/>
      </Router>
    </>
  )
}

export default App

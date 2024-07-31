import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import DetailsProduct from './pages/DetailsProduct/DetailsProduct'

function App() {  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details' element={<DetailsProduct/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App

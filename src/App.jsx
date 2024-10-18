
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App

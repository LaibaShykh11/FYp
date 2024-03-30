import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import MainPage from './pages/MainPage'
import Firstpage from './pages/Firstpage'

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  return (
    <>
      <div className='overflow-hidden'>
        <div>
          <Toaster
            position='top-right'
            toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88',
                },
              },
            }}
          ></Toaster>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Firstpage />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/MainPage/:roomId' element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
{
  /* <Route path='/' element={<Home />}></Route> */
}
{
  /*  <Route path='/Mainpage/:roomId' element={<Mainpage />}></Route> */
}

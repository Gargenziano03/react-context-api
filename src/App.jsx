
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './pages/DefaultLayout'

import HomePage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import ListPost from './pages/ListPost'
import PostPage from './pages/PostPage'
import GlobalContexts from './contexts/GlobalContexts'

const apiUrl = 'http://127.0.0.1:3000'

function App() {
  return (
    <>
      <GlobalContexts.Provider value={{ apiUrl }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              <Route path='/' element={<HomePage />} />
              <Route path='/ChiSiamo' element={<ChiSiamo />} />
              <Route path='/ListPost' element={<ListPost />} />
              <Route path='/ListPost/:id' element={<PostPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContexts.Provider>





    </>
  )
}

export default App

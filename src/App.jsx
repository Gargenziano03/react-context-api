
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './pages/DefaultLayout'

import HomePage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import ListPost from './pages/ListPost'
import PostPage from './pages/PostPage'

function App() {
  return (
    <>
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




    </>
  )
}

export default App

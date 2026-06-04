import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import PageList from './pages/PageList'
import PageDetail from './pages/PageDetail'
import Header from './components/Header'
import CategoryPosts from './pages/CategoryPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl font-bold text-center">Working</h1> */}
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<PageList />} />
            <Route path="/posts/:id" element={<PageDetail />} />
            <Route path="/categories/:id" element={<CategoryPosts />} />
          </Routes>
      </Router>
    </>
  )
}

export default App

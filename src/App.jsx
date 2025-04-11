import { Routes, Route } from 'react-router-dom';
import Pillar from "./Pillar"
import Blog from "./Blog"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Pillar />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
     )
}

export default App

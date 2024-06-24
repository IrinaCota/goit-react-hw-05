import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
  <div>
    <Routes>
    <Route path='/' element={<div>Home page</div>} />
    </Routes>
  </div>
  )
}
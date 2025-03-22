
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Tracks from './Pages/Tracks'
import Events from './Pages/Events'
import Leadership from './Pages/LeaderShip'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}>HomePage</Route>
      <Route path='leadership'
       element={<Leadership/>}>LeaderShip</Route>
      <Route path='tracks' element={<Tracks/>}>Tracks</Route>
      <Route path='events' element={<Events/>}>Events</Route>
    </Routes>

    </>
  )
}

export default App

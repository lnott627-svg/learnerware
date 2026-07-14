import { Navigate, Route, Routes } from 'react-router-dom'
import Splash from './screens/Splash'
import TrackSelect from './screens/TrackSelect'
import LessonPlayer from './screens/LessonPlayer'
import LessonComplete from './screens/LessonComplete'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Templates from './screens/Templates'
import Leaderboard from './screens/Leaderboard'
import { useStore } from './state/store'

function Entry() {
  const selectedTrackId = useStore((s) => s.selectedTrackId)
  if (selectedTrackId) return <Navigate to="/home" replace />
  return <Splash />
}

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/tracks" element={<TrackSelect />} />
        <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
        <Route path="/lesson/:lessonId/complete" element={<LessonComplete />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App

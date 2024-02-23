import { Routes, Route } from 'react-router-dom'
import { Books, Account, Login, Register } from './pages'
import NavBar from './components/Navigations'
import './index.css'

function App() {
  // const [token, setToken] = useState(null)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
    
  )
}

export default App

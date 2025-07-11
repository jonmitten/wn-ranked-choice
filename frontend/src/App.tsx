import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Results from './pages/Results';
import Election from './pages/Election';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Ranked Choice Voting</h1>
          <nav className="space-x-4 mt-2">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/vote" className="hover:underline">Vote</Link>
            <Link to="/results" className="hover:underline">Results</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<Results />} />
            <Route path="/elections/:id" element={<Election />} />
          </Routes>
        </main>
<div className="bg-red-500 text-white p-4">
  If this div is RED, Tailwind is applying!
</div>
        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 Ranked Choice Voting App
        </footer>
      </div>
    </Router>
  );
}

export default App;
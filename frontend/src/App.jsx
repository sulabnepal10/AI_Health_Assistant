import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contenxt/ThemeContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';
import Docs from './pages/Docs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { useState } from 'react';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { StatsProvider } from './contenxt/StatsContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <StatsProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
            <Sidebar open={sidebarOpen} toggle={() => setSidebarOpen(s => !s)} />
            <div className="flex-1 flex flex-col">
              <Header toggleSidebar={() => setSidebarOpen(true)} />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/docs" element={<Docs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </StatsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
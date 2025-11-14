import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Usage from './pages/Usage';

function App() {
  // GitHub Pages basename 配置
  // 仓库名是 'example'，所以 basename 应该是 '/example'
  // React 会根据 package.json 中的 homepage 字段自动设置 PUBLIC_URL
  const basename = process.env.PUBLIC_URL || '/example';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <div className="flex flex-col min-h-screen bg-[var(--background-1)]">
          <TopBar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assets/:category" element={<Categories />} />
                <Route path="/usage" element={<Usage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


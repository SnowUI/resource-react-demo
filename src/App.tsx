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
  // 如果仓库名是 username.github.io，basename 应该是 undefined
  // 如果仓库名是其他名字（如 snowui），basename 应该是 '/snowui'
  // 可以通过环境变量 REACT_APP_BASENAME 设置，或根据 package.json 的 homepage 字段自动检测
  const getBasename = () => {
    // 优先使用环境变量
    if (process.env.REACT_APP_BASENAME) {
      return process.env.REACT_APP_BASENAME === '/' ? undefined : process.env.REACT_APP_BASENAME;
    }
    // 如果 homepage 是 '.'，说明是根路径
    // 如果 homepage 是 '/repo-name'，使用它作为 basename
    const homepage = process.env.PUBLIC_URL || '';
    if (homepage && homepage !== '/' && homepage !== '.') {
      return homepage;
    }
    // 默认不设置 basename（适用于 username.github.io）
    return undefined;
  };

  return (
    <ThemeProvider>
      <Router basename={getBasename()}>
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


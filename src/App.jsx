import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import DashboardPage from './components/DashboardPage';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [analysisData, setAnalysisData] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // home, loading, dashboard

  const handleAnalyze = (data) => {
    setAnalysisData(data);
    setCurrentPage('dashboard');
  };

  const handleNewAnalysis = () => {
    setAnalysisData(null);
    setCurrentPage('home');
  };

  const handleLoading = () => {
    setCurrentPage('loading');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header onNewAnalysis={handleNewAnalysis} showBackButton={currentPage !== 'home'} />
        
        <main className="pt-16">
          {currentPage === 'home' && (
            <HomePage onAnalyze={handleAnalyze} onLoading={handleLoading} />
          )}
          
          {currentPage === 'loading' && (
            <LoadingPage onComplete={handleAnalyze} />
          )}
          
          {currentPage === 'dashboard' && analysisData && (
            <DashboardPage data={analysisData} onNewAnalysis={handleNewAnalysis} />
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

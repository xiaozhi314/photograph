import React from 'react';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProLayoutErrorBoundary from './@base/ProLayoutErrorBoundary';
import { RouteHistoryProvider } from '@/hooks/use-route-history';


// 声明全局变量类型
declare global {
  interface Window {
    __dynamic_base__?: string;
  }
}

const App = () => {
  // 错误处理回调
  const handleError = (errorInfo: any) => {
    console.error('Global error caught:', errorInfo);
  };
  const dynamicBase = window.__dynamic_base__ || '/';
  return (
    <>
      <Toaster position="top-center" richColors offset="100px" expand={true}  />
      <Router basename={dynamicBase}>
        <RouteHistoryProvider>
          <ProLayoutErrorBoundary onError={handleError}>
            <Routes>
            </Routes>
          </ProLayoutErrorBoundary>
        </RouteHistoryProvider>
      </Router>
    </>
  );
};

export default App; 
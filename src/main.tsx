import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App'
import { toast } from 'sonner'

// Providers - 从 app/providers.tsx 复制
function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.alert = toast.info as any;
  }, []);
  return <>{children}</>;
}

// 渲染应用
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  );
} else {
  console.error('[main.tsx] Root element not found!');
}

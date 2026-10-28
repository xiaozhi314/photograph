import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './compat/motion-safe.css';
import './i18n';
import App from './App';
import { toast } from 'sonner';
import { installOpacityGuard } from './compat/gsap-opacity-guard';
import { installTransformGuard } from './compat/gsap-transform-guard';

installOpacityGuard(2000);
installTransformGuard(2000);

function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.alert = toast.info as any;
  }, []);
  return <>{children}</>;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>,
  );
} else {
  console.error('[main.tsx] Root element not found!');
}

import '../src/index.css'
import { Providers } from './providers'
import { Toaster } from 'sonner'
import Script from 'next/script'
import { Suspense } from 'react'

const dynamicBase = process.env.NEXT_PUBLIC_DYNAMIC_BASE ?? '/__dynamic_base__'
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? 'PROJ_9fedb2a5'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// const buildAssetUrl = (path: string) => {
//   if (!dynamicBase || dynamicBase === '/') {
//     return path
//   }
//   const base =
//     dynamicBase.endsWith('/') && dynamicBase !== '/'
//       ? dynamicBase.slice(0, -1)
//       : dynamicBase
//   return `${base}${path}`
// }

const generateReservedCode = () => {
  const contentProducer = 'AutoCoder.cc AIGCode的AI大模型生成'
  const label = '1'
  const combined = `${contentProducer}${label}${projectId}`
  let hexIdentifier = ''
  for (let i = 0; i < combined.length; i += 1) {
    const charCode = combined.charCodeAt(i)
    const asciiValue = charCode > 127 ? 63 : charCode
    hexIdentifier += asciiValue.toString(16).padStart(2, '0')
  }
  return hexIdentifier
}

const reservedCode =
  process.env.NEXT_PUBLIC_RESERVED_CODE1 ?? generateReservedCode()
const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ?? 'Kids English Learning Hub'

export const metadata = {
  title: siteTitle,
  description:
    'Interactive vocabulary, phrases, and picture books designed for young learners.',
  icons: {
    icon: [
      { url: (basePath + '/favicon.svg'), type: 'image/svg+xml' },
      { url: (basePath + '/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: (basePath + '/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: (basePath + '/favicon.ico'), type: 'image/x-icon' }
    ],
    apple: [
      { url: (basePath + '/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'AIGC-Label': '1',
    Label: '1',
    'AIGC-ContentProducer': 'AutoCoder.cc AIGCode的AI大模型生成',
    ContentProducer: 'AutoCoder.cc AIGCode的AI大模型生成',
    'AIGC-ProduceID': projectId,
    ProduceID: projectId,
    'AIGC-ReservedCode1': reservedCode,
    ReservedCode1: reservedCode
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="prefetch" as="script" href="/background/domsdk.umd.min.js" />
        <link rel="prefetch" as="script" href="/background/edisdk.umd.min.js" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache,no-store,must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="antialiased">
        <Script id="dynamic-base" strategy="beforeInteractive">
          {`window.__dynamic_base__ = '${dynamicBase}';`}
        </Script>
        <Script id="capture-location" strategy="beforeInteractive">
          {`window.__location__ = {
            href: window.location.href,
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            origin: window.location.origin,
            protocol: window.location.protocol,
            host: window.location.host
          };`}
        </Script>
        <Script
          src={`${basePath}/auto-login.js`}
          strategy="afterInteractive"
        />
        <Script
          src={`${basePath}/api-data-marker-runtime-v3.js`}
          strategy="beforeInteractive"
        />
        <Providers>
          <Toaster
            position="top-center"
            richColors
            offset="100px"
            expand
            visibleToasts={5}
            duration={3000}
          />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <div
            id="aigcode_badge"
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              zIndex: 1000,
              display: 'none'
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href=""
              style={{
                display: 'block',
                background: 'transparent',
                borderRadius: 8,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                color: '#333',
                position: 'relative'
              }}
            >
              <img
                style={{ width: 229, height: 'auto', minHeight: 30 }}
                src="{{DOMAIN}}/img/autopilot/aigcode_badge.png"
                alt=""
              />
              <button
                id="aigcode_badge-close"
                style={{
                  position: 'absolute',
                  top: -2,
                  right: 5,
                  cursor: 'pointer',
                  fontSize: 14,
                  color: '#a1a1aa',
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
              >
                ×
              </button>
            </a>
          </div>
        </Providers>
        <Script
          id="domsdk-loader"
          strategy="afterInteractive"
          data-api-unique-id="layout-r016d2d09bd84c74e-s4028167071"
          data-api-unique-page-name="app/layout"
        >
          {`
            (function() {
              if (document.querySelector('script[src*="domsdk.umd.min.js"]')) return;
              var script = document.createElement('script');
              script.src = '/background/domsdk.umd.min.js';
              script.async = true;
              script.defer = true;
              document.body.appendChild(script);
            })();
          `}
        </Script>
        <Script
          id="edisdk-loader"
          strategy="afterInteractive"
          data-api-unique-id="layout-r60e8daed5f318e94-s4028167071"
          data-api-unique-page-name="app/layout"
        >
          {`
            (function() {
              if (document.querySelector('script[src*="edisdk.umd.min.js"]')) return;
              var script = document.createElement('script');
              script.src = '/background/edisdk.umd.min.js';
              script.async = true;
              script.defer = true;
              document.body.appendChild(script);
            })();
          `}
        </Script>
        <Script id="async-font-loader" strategy="afterInteractive">
          {`
              (function() {
                // var fontUrl = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&family=Merriweather:wght@400;700&display=swap';
                // var link = document.createElement('link');
                // link.rel = 'stylesheet';
                // link.href = fontUrl;
                // document.head.appendChild(link);
              })();
            `}
        </Script>
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import Script from 'next/script'

import "./globals.css";

const dynamicBase = process.env.NEXT_PUBLIC_DYNAMIC_BASE ?? ''
const sdkBasePath = dynamicBase.replace(/\/$/, '')
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? 'PROJ_9fedb2a5'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

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
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 临时使用 selection-grain 分支 SDK；正式版本发布后删除后缀，恢复正式文件名。
  const domSdkPath = `${sdkBasePath}/background/domsdk_codex_selection-grain.umd.min.js`
  const ediSdkPath = `${sdkBasePath}/background/edisdk_codex_selection-grain.umd.min.js`

  return (
    <html lang="en" dir="ltr">
       <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache,no-store,must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>
        {children}
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
          id="domsdk-loader"
          strategy="afterInteractive"
          data-api-unique-id="layout-r016d2d09bd84c74e-s4028167071"
          data-api-unique-page-name="app/layout"
        >
          {`
            (function() {
              if (document.querySelector('script[src*="domsdk"]')) return;
              var script = document.createElement('script');
              script.src = ${JSON.stringify(domSdkPath)};
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
              if (document.querySelector('script[src*="edisdk"]')) return;
              var script = document.createElement('script');
              script.src = ${JSON.stringify(ediSdkPath)};
              script.async = true;
              script.defer = true;
              document.body.appendChild(script);
            })();
          `}
        </Script>
        <Script id="async-font-loader" strategy="afterInteractive">
          {`
              (function() {
                var FONT_LINK_ID = 'fast-line-google-fonts-bundle';
                if (typeof document !== 'undefined' && document.getElementById(FONT_LINK_ID)) return;
                var fontUrl = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&family=Merriweather:wght@400;700&display=swap';
                var link = document.createElement('link');
                link.id = FONT_LINK_ID;
                link.rel = 'stylesheet';
                link.href = fontUrl;
                document.head.appendChild(link);
              })();
            `}
        </Script>
      </body>
    </html>
  );
}

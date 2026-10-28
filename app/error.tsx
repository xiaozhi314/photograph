'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import GRoud404SVG from '@/assets/GRoud404SVG.svg'

// 错误信息接口
interface CustomErrorInfo {
  error: Error;
  timestamp: number;
  url: string;
  userAgent: string;
  stack?: string;
  sourceLocation?: any;
  errorType: 'react' | 'javascript' | 'promise' | 'resource';
  digest?: string;
  context?: any;
}

// 工具函数：确保数据可序列化
const ensureSerializable = (data: any): any => {
  try {
    // 测试数据是否可以被序列化
    JSON.stringify(data);
    return data;
  } catch (error) {
    // 如果无法序列化，返回一个简化的版本
    if (typeof data === 'object' && data !== null) {
      const simplified: any = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          try {
            const value = data[key];
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
              simplified[key] = value;
            } else if (value === null || value === undefined) {
              simplified[key] = value;
            } else if (Array.isArray(value)) {
              simplified[key] = value.map(item => 
                typeof item === 'object' ? '[Object]' : item
              );
            } else if (typeof value === 'object') {
              simplified[key] = '[Object]';
            }
          } catch {
            simplified[key] = '[Unserializable]';
          }
        }
      }
      return simplified;
    }
    return '[Unserializable]';
  }
};

// 提取源码位置信息
const extractSourceLocation = (error: Error): any => {
  try {
    // 优先从错误堆栈中提取
    const stack = error.stack;
    if (stack) {
      const lines = stack.split('\n');
      for (const line of lines) {
        // 跳过错误边界相关的堆栈行
        if (line.includes('Error') || line.includes('error.tsx')) {
          continue;
        }
        
        // 匹配源码映射信息
        const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
        if (match) {
          const file = match[2];
          // 跳过错误边界文件本身
          if (file && !file.includes('error.tsx')) {
            return {
              function: match[1],
              file: file,
              line: parseInt(match[3]),
              column: parseInt(match[4]),
              id: `${file}:${match[3]}:${match[4]}`
            };
          }
        }
        
        // 也尝试匹配 webpack:// 格式的源码映射
        const webpackMatch = line.match(/at\s+(.+?)\s+\((.+?\.tsx?):(\d+):(\d+)\)/);
        if (webpackMatch) {
          const file = webpackMatch[2];
          if (file && !file.includes('error.tsx')) {
            return {
              function: webpackMatch[1],
              file: file,
              line: parseInt(webpackMatch[3]),
              column: parseInt(webpackMatch[4]),
              id: `${file}:${webpackMatch[3]}:${webpackMatch[4]}`
            };
          }
        }
      }
    }

    return null;
  } catch (error) {
    return null;
  }
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [errorInfo, setErrorInfo] = useState<CustomErrorInfo | null>(null)

  useEffect(() => {
    // Log the error to an error reporting service

    // 提取源码位置信息
    const sourceLocation = extractSourceLocation(error);

    // 构建完整的错误信息
    const fullErrorInfo: CustomErrorInfo = {
      error,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      stack: error.stack,
      sourceLocation,
      errorType: 'react',
      digest: error.digest,
      context: {
        name: error.name,
        message: error.message,
      }
    };

    setErrorInfo(fullErrorInfo);

    // Add loaded class for animation
    const target = document.querySelector('.errorPage') as HTMLElement
    if (target) {
      target.classList.add('loaded')
    }
  }, [error])

 

  const handleFix = (): void => {
    if (!errorInfo) {
      return;
    }
    setIsLoading(true);

    // 构建错误日志数据
    const logData = {
      type: 'error:react',
      error: {
        name: errorInfo.error.name,
        message: errorInfo.error.message,
        stack: errorInfo.error.stack
      },
      url: errorInfo.url,
      userAgent: errorInfo.userAgent,
      timestamp: errorInfo.timestamp,
      sourceLocation: errorInfo.sourceLocation,
      errorType: errorInfo.errorType,
      digest: errorInfo.digest,
      context: errorInfo.context
    };

    // 创建可序列化的错误信息
    const serializableErrorInfo = ensureSerializable(logData);
    try { 
      if (typeof window !== 'undefined' && window.parent) {
        window.parent.postMessage(serializableErrorInfo, '*');
      }
    } catch (error) {
      console.warn('Failed to send error via postMessage:', error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleTargetHome = () => {
    // 使用 Next.js router 进行导航
    router.replace('/');
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#f5f5f5',
      height: '100vh',
      width: '100vw'
    }}>
      <div 
        className="flex flex-col gap-2 items-center left-2/4 top-2/4 absolute justify-center w-screen h-screen errorPage transition-opacity duration-300 opacity-0" 
        style={{
          transform: 'translate(-50%, -50%)',
          fontFamily: "'DINCondensedBold', sans-serif"
        }}
      >
        <div className="relative w-full max-w-[600px] aspect-[4/3]">
          <Image
            src={GRoud404SVG}
            alt="404 illustration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
            onLoad={() => {
              if(typeof window !== 'undefined') {
                const target = document.querySelector('.errorPage') as HTMLElement;
                if (target) {
                  target.style.opacity = '1';
                }
              }
            }}
          />
        </div>
        <p className="text-[56px] font-bold">404</p>
        <div className="flex gap-4 mt-8">
          <Button 
            disabled={isLoading}
            className="w-[140px] cursor-pointer pointer-events-auto !text-[#fff] !border-[#ff4e4f] !bg-[#ff4e4f] hover:!border-[#ff4e4f] hover:!text-[#fff] focus:!outline-none focus:!border-[#ff4e4f] hover:opacity-85" 
            onClick={handleFix}
          >
            {isLoading ? 'Fixing...' : 'FIX'}
          </Button>
          <Button 
            className="w-[140px] cursor-pointer pointer-events-auto !text-[#fff] !border-[#02160F] !bg-[#02160F] hover:!border-[#02160F] hover:!text-[#fff] focus:!outline-none focus:!border-[#02160F] hover:opacity-85" 
            onClick={handleTargetHome}
          >
            Back Home
          </Button>
        </div>
      </div>
    </div>
  )
}

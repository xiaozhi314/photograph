'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'


import FrontendAuthGuard from '@/tools/FrontendAuthGuard'
import { PageErrorBoundary } from '@/default/NextPageErrorBoundary'

import '@/index.css'
import './theme-style.css'
import './theme-layout.css'
import { AuthExpiredDialog } from '@/frontend/auth/rpc-auth'



// 不需要导航栏和页脚的路径白名单（模板，后续可修改）
const FULLSCREEN_PATHS = ['/clientlogin', '/clientregister']

interface RootLayoutProps {
  children: React.ReactNode
}

export default function FrontendLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const handleGoBack = () => router.back()
  const normalizedPathname = pathname.toLowerCase()
  const isFullscreen = FULLSCREEN_PATHS.some(
    (p) => normalizedPathname === p || (p !== '/' && normalizedPathname.startsWith(`${p}/`))
  )

  return (<FrontendAuthGuard><ShellActionsProvider>{isFullscreen ? <>{<AuthExpiredDialog />}<PageErrorBoundary key={pathname} onGoBack={handleGoBack}>{children}</PageErrorBoundary></> : <ShellFrame overlay={<AuthExpiredDialog />}><PageErrorBoundary key={pathname} onGoBack={handleGoBack}>{children}</PageErrorBoundary></ShellFrame>}</ShellActionsProvider></FrontendAuthGuard>)
}

import ShellFrame from "@/components/layout/frontend/ShellFrame";
import { ShellActionsProvider } from "@/components/layout/frontend/ShellActions";

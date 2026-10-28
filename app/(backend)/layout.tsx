'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import "@/index.css"
import "./theme-style.css"
import "./theme-layout.css"
import { PageErrorBoundary } from '@/default/NextPageErrorBoundary'
import BackendAuthGuard from "@/tools/BackendAuthGuard"
import { AuthExpiredDialog } from '@/backend/auth/rpc-auth'







// 不需要侧边栏的路径白名单（模板，后续可修改）
const FULLSCREEN_PATHS = ['/adminlogin', '/adminregister']

interface RootLayoutProps {
  children: React.ReactNode
}

export default function BackendLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const handleGoBack = () => router.back()
  const normalizedPathname = pathname.toLowerCase()
  const isFullscreen = FULLSCREEN_PATHS.some(
    (p) => normalizedPathname === p || (p !== '/' && normalizedPathname.startsWith(`${p}/`))
  )

  return (<BackendAuthGuard><ShellActionsProvider>{isFullscreen ? <>{<AuthExpiredDialog />}<PageErrorBoundary key={pathname} onGoBack={handleGoBack}>{children}</PageErrorBoundary></> : <ShellFrame overlay={<AuthExpiredDialog />}><PageErrorBoundary key={pathname} onGoBack={handleGoBack}>{children}</PageErrorBoundary></ShellFrame>}</ShellActionsProvider></BackendAuthGuard>)
}

import ShellFrame from "@/components/layout/backend/ShellFrame";
import { ShellActionsProvider } from "@/components/layout/backend/ShellActions";

"use client"

// next-themes 클라이언트 래퍼 컴포넌트
// 서버 컴포넌트에서 사용 불가한 next-themes를 클라이언트 바운더리로 감싸는 역할

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ComponentProps } from "react"

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

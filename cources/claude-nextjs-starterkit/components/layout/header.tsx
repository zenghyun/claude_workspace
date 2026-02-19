// 사이트 헤더 컴포넌트
// 데스크톱: 로고 + 네비게이션 + 테마 토글
// 모바일: 햄버거 메뉴 + 로고 + 테마 토글

import Link from "next/link"
import { NavLinks } from "@/components/layout/nav-links"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        {/* 모바일 햄버거 메뉴 */}
        <MobileNav />

        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold">
          {siteConfig.name}
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden flex-1 md:flex">
          <NavLinks />
        </div>

        {/* 우측 액션 영역 */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

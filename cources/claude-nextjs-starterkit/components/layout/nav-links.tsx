// 네비게이션 링크 목록 컴포넌트
// Header(가로)와 MobileNav(세로)에서 공유하여 사용

import Link from "next/link"
import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface NavLinksProps {
  // 모바일 네비게이션에서 세로 배치를 위한 플래그
  vertical?: boolean
  // 링크 클릭 시 콜백 (모바일 메뉴 닫기 등)
  onLinkClick?: () => void
}

export function NavLinks({ vertical = false, onLinkClick }: NavLinksProps) {
  return (
    <nav className={cn("flex gap-6", vertical && "flex-col gap-4")}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            vertical && "text-base",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

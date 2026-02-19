// 사이트 전역 설정 상수

// 네비게이션 링크 타입
export interface NavItem {
  label: string
  href: string
}

// 사이트 기본 설정
export const siteConfig = {
  name: "Next.js 스타터킷",
  description:
    "Next.js, TypeScript, Tailwind CSS, shadcn/ui 기반 모던 웹 스타터킷",
  url: "https://example.com",
  github: "https://github.com",
} as const

// 메인 네비게이션 링크
export const navLinks: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "컴포넌트", href: "/examples/components" },
  { label: "폼", href: "/examples/form" },
]

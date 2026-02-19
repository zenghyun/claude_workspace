# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 빌드 및 개발 명령어

```bash
yarn dev          # 개발 서버 (Turbopack)
yarn build        # 프로덕션 빌드
yarn start        # 프로덕션 서버
yarn lint         # ESLint 실행
```

### shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add <component-name>   # 예: npx shadcn@latest add button
```

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5** (strict)
- **Tailwind CSS v4** (`@tailwindcss/postcss`) + **shadcn/ui** (New York 스타일)
- **next-themes** (다크모드) + **lucide-react** (아이콘) + **sonner** (토스트)
- **React Hook Form** + **Zod** + **@hookform/resolvers** (폼 유효성 검증)
- **Yarn Berry** (`nodeLinker: node-modules`)

## 아키텍처

### 레이아웃 흐름
`app/layout.tsx`에서 전체 앱을 구성:
```
html (lang="ko", suppressHydrationWarning)
└── body
    └── ThemeProvider (providers/theme-provider.tsx)
        ├── Header (sticky, 반응형 - 모바일 Sheet 메뉴 / 데스크톱 네비)
        ├── main (flex-1, 콘텐츠 영역)
        ├── Footer
        └── Toaster (sonner)
```

### 컴포넌트 계층 구조
- `components/ui/` — shadcn/ui 프리미티브 (CLI로 자동 생성, 직접 수정 가능)
- `components/layout/` — 전역 레이아웃 (Header, Footer, MobileNav, NavLinks)
- `components/landing/` — 랜딩 페이지 전용 섹션 컴포넌트
- `components/theme-toggle.tsx` — 다크/라이트/시스템 테마 토글
- `providers/` — React Provider 래퍼 (ThemeProvider)

### 주요 설정 파일
- `lib/constants.ts` — 사이트명, 네비게이션 링크 등 전역 상수 (`siteConfig`, `navLinks`)
- `lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)
- `components.json` — shadcn/ui CLI 설정 (경로 별칭, 스타일, 아이콘)

### 경로 별칭
`@/*`가 프로젝트 루트에 매핑됨 (`@/components`, `@/lib/utils`, `@/hooks` 등)

### 다크모드 (Tailwind CSS v4)
`globals.css`에서 클래스 기반 다크모드를 설정:
```css
@custom-variant dark (&:where(.dark, .dark *));
```
`:root`에 라이트 테마, `.dark`에 다크 테마 CSS 변수가 정의되어 있음. `next-themes`가 `<html>`에 `.dark` 클래스를 토글.

### 페이지 구조
- `/` — 랜딩 페이지 (Hero + Features + CTA 섹션)
- `/examples/components` — shadcn/ui 컴포넌트 사용 예제
- `/examples/form` — React Hook Form + Zod 폼 예제
- 각 페이지의 `_sections/` 디렉토리에 섹션별 컴포넌트를 분리

## 코딩 컨벤션

- 한국어: 코드 주석, 커밋 메시지, 문서 (변수명/함수명은 영어)
- 들여쓰기 2칸, camelCase 변수, PascalCase 컴포넌트
- `as` 타입 단언 금지, `any` 타입 금지
- 반응형 필수 (mobile-first, `md` 브레이크포인트)
- 서버 컴포넌트 기본, 클라이언트 필요 시에만 `"use client"`

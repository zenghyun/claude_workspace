# Code Reviewer Agent Memory

## 프로젝트 개요
- Next.js 15 + React 19 + TypeScript 5 (strict)
- Tailwind CSS v4 + shadcn/ui (New York 스타일)
- React Hook Form + Zod 폼 관리
- sonner 토스트 라이브러리
- Yarn Berry 패키지 매니저

## 확인된 코드 패턴 및 컨벤션

### 폼 패턴 (contact-form.tsx, signup-form.tsx)
- Zod 스키마를 컴포넌트 파일 상단에 정의 (모듈 레벨)
- `z.infer<typeof schema>` 로 타입 추론
- `useForm<T>({ resolver: zodResolver(schema) })` 패턴 사용
- 에러 메시지: `{errors.field && <p className="text-sm text-destructive">{errors.field.message}</p>}`
- 제출 버튼: `disabled={isSubmitting}` 로 중복 제출 방지

### 접근성 패턴
- `<Label htmlFor="id">` + `<Input id="id">` 연결 방식 사용
- 에러 메시지에 `aria-describedby` 미사용 (개선 필요 패턴)

### 반복되는 이슈 (첫 번째 리뷰에서 발견)
1. 폼 에러 메시지에 `aria-describedby`, `role="alert"` 누락
2. `onSubmit` 핸들러가 비동기가 아닌 동기 함수로 정의됨 (API 호출 확장 시 문제)
3. Dialog 내 `<form>` 미연결 (type="submit" 버튼이 form과 연결 안 됨)
4. 외부 이미지 URL (github.com) 사용 시 next.config.ts에 도메인 설정 필요
5. 토스트 날짜가 하드코딩됨 (동적 생성 필요)
6. shadcn/ui Form 컴포넌트 미활용 (직접 Label+Input 조합)

### 컴포넌트 구조 패턴
- `_sections/` 디렉토리에 섹션별 컴포넌트 분리 (좋은 패턴)
- 서버 컴포넌트 기본, 상태/이벤트 필요 시 `"use client"` 추가
- `"use client"` 선언이 파일 최상단에 위치 (컨벤션 준수)

## 관련 파일들
- 폼 예제: `app/examples/form/_sections/contact-form.tsx`, `signup-form.tsx`
- 컴포넌트 예제: `app/examples/components/_sections/*.tsx`
- 상세 패턴: `patterns.md` 참고

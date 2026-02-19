// 폼 예제 페이지
// React Hook Form + Zod 유효성 검증 예제

import type { Metadata } from "next"
import { ContactForm } from "./_sections/contact-form"
import { SignupForm } from "./_sections/signup-form"

export const metadata: Metadata = {
  title: "폼 | Next.js 스타터킷",
  description: "React Hook Form + Zod 폼 유효성 검증 예제",
}

export default function FormPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          폼
        </h1>
        <p className="text-lg text-muted-foreground">
          React Hook Form과 Zod를 활용한 폼 유효성 검증 예제입니다.
        </p>
      </div>

      {/* 폼 섹션들 */}
      <div className="space-y-16">
        <ContactForm />
        <SignupForm />
      </div>
    </div>
  )
}

// shadcn/ui 컴포넌트 쇼케이스 페이지
// 설치된 컴포넌트들의 사용 예제를 카테고리별로 정리

import type { Metadata } from "next"
import { ButtonExamples } from "./_sections/button-examples"
import { BadgeExamples } from "./_sections/badge-examples"
import { CardExamples } from "./_sections/card-examples"
import { DialogExample } from "./_sections/dialog-example"
import { InputExamples } from "./_sections/input-examples"
import { SkeletonExample } from "./_sections/skeleton-example"
import { AvatarExamples } from "./_sections/avatar-examples"
import { ToastExample } from "./_sections/toast-example"

export const metadata: Metadata = {
  title: "컴포넌트 | Next.js 스타터킷",
  description: "shadcn/ui 컴포넌트 사용 예제",
}

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          컴포넌트
        </h1>
        <p className="text-lg text-muted-foreground">
          이 스타터킷에 포함된 shadcn/ui 컴포넌트들의 사용 예제입니다.
        </p>
      </div>

      {/* 컴포넌트 섹션들 */}
      <div className="space-y-16">
        <ButtonExamples />
        <BadgeExamples />
        <CardExamples />
        <InputExamples />
        <DialogExample />
        <AvatarExamples />
        <SkeletonExample />
        <ToastExample />
      </div>
    </div>
  )
}

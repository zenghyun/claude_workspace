// 히어로 섹션 컴포넌트
// 랜딩 페이지 최상단, 프로젝트 소개 및 CTA 버튼

import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-24 text-center md:py-32">
      {/* 배지 */}
      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
        Next.js + TypeScript + Tailwind CSS + shadcn/ui
      </Badge>

      {/* 메인 헤딩 */}
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        빠르게 시작하는{" "}
        <span className="text-primary">웹 애플리케이션</span> 개발
      </h1>

      {/* 서브 텍스트 */}
      <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
        검증된 기술 스택과 모범 사례가 적용된 스타터킷으로 프로덕션 레벨의 웹
        애플리케이션을 빠르게 구축하세요.
      </p>

      {/* CTA 버튼 그룹 */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="#cta">
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}

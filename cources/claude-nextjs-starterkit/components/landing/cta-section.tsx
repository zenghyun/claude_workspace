// CTA(Call to Action) 섹션 컴포넌트
// 사용자에게 다음 행동을 유도하는 섹션

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-border/40">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground">
            아래 명령어 한 줄로 이 스타터킷을 클론하여 새로운 프로젝트를 시작할
            수 있습니다.
          </p>

          {/* 명령어 코드 블록 */}
          <div className="w-full max-w-lg rounded-lg border border-border bg-muted p-4 font-mono text-sm">
            <code>git clone {siteConfig.github}</code>
          </div>

          {/* CTA 버튼 */}
          <Button size="lg" asChild>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub에서 시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

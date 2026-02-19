// 기능 소개 섹션 컴포넌트
// 스타터킷의 주요 기능/기술을 카드 그리드로 표시

import {
  Blocks,
  Moon,
  Palette,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 기능 항목 타입
interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

// 기능 목록 데이터
const features: Feature[] = [
  {
    icon: Zap,
    title: "빠른 개발 속도",
    description:
      "Next.js App Router와 TypeScript로 타입 안전한 개발 환경을 제공합니다.",
  },
  {
    icon: Palette,
    title: "아름다운 UI",
    description:
      "shadcn/ui와 Tailwind CSS로 일관성 있고 커스터마이징 가능한 디자인 시스템을 제공합니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description:
      "next-themes 기반의 완벽한 다크/라이트 모드를 기본으로 지원합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description:
      "모바일부터 데스크톱까지 모든 화면 크기에 최적화된 레이아웃을 제공합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "strict 모드의 TypeScript로 런타임 에러를 사전에 방지합니다.",
  },
  {
    icon: Blocks,
    title: "모듈러 구조",
    description:
      "확장 가능한 폴더 구조와 재사용 가능한 컴포넌트 아키텍처를 제공합니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border/40 bg-muted/50">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* 섹션 헤딩 */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            주요 기능
          </h2>
          <p className="text-lg text-muted-foreground">
            프로덕션 환경에 바로 적용할 수 있는 검증된 기술 스택과 모범 사례를
            제공합니다.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <feature.icon className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

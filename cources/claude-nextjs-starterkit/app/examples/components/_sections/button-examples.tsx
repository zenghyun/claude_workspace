// Button 컴포넌트 사용 예제

import { ArrowRight, Download, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonExamples() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Button</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        다양한 variant와 size를 지원하는 버튼 컴포넌트입니다.
      </p>

      {/* Variants */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">XS</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-muted-foreground">
          아이콘 포함
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail />
            이메일 보내기
          </Button>
          <Button variant="outline">
            다운로드
            <Download />
          </Button>
          <Button variant="secondary">
            다음 단계
            <ArrowRight />
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            처리 중...
          </Button>
        </div>
      </div>
    </section>
  )
}

// Badge 컴포넌트 사용 예제

import { Badge } from "@/components/ui/badge"

export function BadgeExamples() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Badge</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        상태 표시, 태그, 라벨에 사용하는 배지 컴포넌트입니다.
      </p>

      <div className="flex flex-wrap gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </section>
  )
}

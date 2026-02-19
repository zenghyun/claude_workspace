// Skeleton 컴포넌트 사용 예제

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonExample() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Skeleton</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        로딩 상태를 표시하는 플레이스홀더 컴포넌트입니다.
      </p>

      {/* 카드 형태 스켈레톤 */}
      <div className="max-w-sm space-y-4 rounded-lg border p-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-32 w-full rounded-md" />
      </div>
    </section>
  )
}

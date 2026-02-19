"use client"

// Sonner(Toast) 컴포넌트 사용 예제

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastExample() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Toast (Sonner)</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        사용자에게 피드백을 제공하는 토스트 알림 컴포넌트입니다.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => toast("기본 알림입니다.")}
        >
          기본 토스트
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("성공적으로 저장되었습니다.")}
        >
          성공 토스트
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("오류가 발생했습니다.")}
        >
          에러 토스트
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("이벤트가 생성되었습니다.", {
              description: "2026년 2월 19일 (수)",
              action: {
                label: "되돌리기",
                onClick: () => toast.info("되돌렸습니다."),
              },
            })
          }
        >
          액션 포함 토스트
        </Button>
      </div>
    </section>
  )
}

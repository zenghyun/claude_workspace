// Input, Label, Textarea 컴포넌트 사용 예제

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function InputExamples() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Input / Textarea</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        텍스트 입력을 위한 Input, Label, Textarea 컴포넌트입니다.
      </p>

      <div className="grid max-w-md gap-6">
        {/* 기본 Input */}
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>

        {/* 비밀번호 */}
        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" placeholder="비밀번호 입력" />
        </div>

        {/* 비활성화 */}
        <div className="space-y-2">
          <Label htmlFor="disabled">비활성화</Label>
          <Input id="disabled" placeholder="수정할 수 없습니다" disabled />
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <Label htmlFor="message">메시지</Label>
          <Textarea id="message" placeholder="메시지를 입력하세요..." />
        </div>
      </div>
    </section>
  )
}

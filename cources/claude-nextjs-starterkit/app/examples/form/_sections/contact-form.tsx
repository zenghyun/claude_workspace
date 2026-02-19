"use client"

// 문의 폼 예제
// React Hook Form + Zod 기본 사용법

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Zod 스키마 정의
const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  message: z.string().min(10, "메시지는 10자 이상이어야 합니다."),
})

// 스키마에서 타입 추론
type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormValues) => {
    // 실제 프로젝트에서는 API 호출
    toast.success("문의가 접수되었습니다.", {
      description: `${data.name}님, 빠른 시일 내에 답변드리겠습니다.`,
    })
    reset()
  }

  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">문의 폼</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        React Hook Form + Zod의 기본적인 사용법을 보여주는 문의 폼입니다.
      </p>

      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>문의하기</CardTitle>
          <CardDescription>
            궁금한 점이 있으시면 아래 양식을 작성해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* 이름 */}
            <div className="space-y-2">
              <Label htmlFor="contact-name">이름</Label>
              <Input
                id="contact-name"
                placeholder="홍길동"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="contact-email">이메일</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* 메시지 */}
            <div className="space-y-2">
              <Label htmlFor="contact-message">메시지</Label>
              <Textarea
                id="contact-message"
                placeholder="문의 내용을 입력하세요..."
                className="min-h-[120px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* 제출 버튼 */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <Send />
              {isSubmitting ? "전송 중..." : "문의 보내기"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

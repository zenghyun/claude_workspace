"use client"

// 회원가입 폼 예제
// 비밀번호 확인, 복잡한 유효성 검증 패턴

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Zod 스키마 정의 (비밀번호 확인 포함)
const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, "사용자명은 3자 이상이어야 합니다.")
      .max(20, "사용자명은 20자 이하여야 합니다.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "영문, 숫자, 밑줄(_)만 사용할 수 있습니다.",
      ),
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .regex(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "대문자, 소문자, 숫자를 각각 하나 이상 포함해야 합니다.",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  })

type SignupFormValues = z.infer<typeof signupSchema>

export function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (data: SignupFormValues) => {
    toast.success("회원가입이 완료되었습니다.", {
      description: `${data.username}님, 환영합니다!`,
    })
    reset()
  }

  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">회원가입 폼</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        비밀번호 확인, 정규식 검증 등 복잡한 유효성 검증 패턴 예제입니다.
      </p>

      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
          <CardDescription>
            새 계정을 만들어 서비스를 이용하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* 사용자명 */}
            <div className="space-y-2">
              <Label htmlFor="signup-username">사용자명</Label>
              <Input
                id="signup-username"
                placeholder="hong_gildong"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-sm text-destructive">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="signup-email">이메일</Label>
              <Input
                id="signup-email"
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

            {/* 비밀번호 */}
            <div className="space-y-2">
              <Label htmlFor="signup-password">비밀번호</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="8자 이상, 대소문자 + 숫자"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* 비밀번호 확인 */}
            <div className="space-y-2">
              <Label htmlFor="signup-confirm">비밀번호 확인</Label>
              <Input
                id="signup-confirm"
                type="password"
                placeholder="비밀번호 재입력"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* 제출 버튼 */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <UserPlus />
              {isSubmitting ? "가입 중..." : "가입하기"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

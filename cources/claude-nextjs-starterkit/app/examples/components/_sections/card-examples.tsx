// Card 컴포넌트 사용 예제

import { Bell, CreditCard, Settings } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CardExamples() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Card</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        콘텐츠를 그룹화하는 카드 컴포넌트입니다.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* 기본 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 설정</CardTitle>
            <CardDescription>
              프로젝트의 기본 설정을 관리합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              이름, 설명, 공개 여부 등의 설정을 변경할 수 있습니다.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">
              <Settings className="mr-1" />
              설정하기
            </Button>
          </CardFooter>
        </Card>

        {/* 알림 카드 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>알림</CardTitle>
              <Badge variant="secondary">3개</Badge>
            </div>
            <CardDescription>최근 알림 목록입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["새로운 댓글이 달렸습니다.", "배포가 완료되었습니다.", "팀원이 초대를 수락했습니다."].map(
              (text) => (
                <div key={text} className="flex items-start gap-3">
                  <Bell className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <p className="text-sm">{text}</p>
                </div>
              ),
            )}
          </CardContent>
        </Card>

        {/* 결제 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>결제 수단</CardTitle>
            <CardDescription>
              등록된 결제 수단을 확인합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 rounded-md border p-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                <p className="text-xs text-muted-foreground">만료일 12/26</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              수정하기
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

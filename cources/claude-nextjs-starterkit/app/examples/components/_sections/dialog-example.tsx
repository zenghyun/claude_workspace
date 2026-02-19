"use client"

// Dialog 컴포넌트 사용 예제

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogExample() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Dialog</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        모달 다이얼로그 컴포넌트입니다. 확인, 입력, 경고 등에 사용합니다.
      </p>

      <div className="flex flex-wrap gap-3">
        {/* 기본 다이얼로그 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">프로필 수정</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>
                프로필 정보를 수정한 후 저장 버튼을 클릭하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" defaultValue="홍길동" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">사용자명</Label>
                <Input id="username" defaultValue="@hong" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">저장하기</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 확인 다이얼로그 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">삭제하기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
              <DialogDescription>
                이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">취소</Button>
              <Button variant="destructive">삭제</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

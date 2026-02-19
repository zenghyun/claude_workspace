// Avatar 컴포넌트 사용 예제

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarExamples() {
  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">Avatar</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다. 이미지 로드 실패
        시 폴백을 표시합니다.
      </p>

      <div className="flex items-center gap-4">
        {/* 이미지 아바타 */}
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="프로필"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        {/* 폴백 아바타들 */}
        <Avatar>
          <AvatarFallback>홍</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar className="h-12 w-12">
          <AvatarFallback className="text-lg">LG</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}

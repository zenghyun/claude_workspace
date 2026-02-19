"use client"

// 모바일 네비게이션 컴포넌트
// Sheet(슬라이드 패널)를 사용한 햄버거 메뉴

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLinks } from "@/components/layout/nav-links"
import { siteConfig } from "@/lib/constants"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
          <SheetDescription className="sr-only">
            네비게이션 메뉴
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 px-4">
          <NavLinks vertical onLinkClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

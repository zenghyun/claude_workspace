// 사이트 푸터 컴포넌트

import Link from "next/link"
import { siteConfig } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* 프로젝트 정보 */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm font-medium">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* 링크 */}
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        {/* 저작권 */}
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

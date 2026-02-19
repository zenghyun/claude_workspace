// 메인 랜딩 페이지
// 각 섹션 컴포넌트를 조합하여 완성

import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CtaSection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </>
  )
}

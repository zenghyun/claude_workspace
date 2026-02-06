# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개발자 웹 이력서 프로젝트 - HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 웹 이력서

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어
- **커밋 메시지**: 한국어
- **문서화**: 한국어
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript**: ES6+ 문법 사용
- **TailwindCSS**: 유틸리티 기반 스타일링 (CDN 사용)

## 개발 명령어

```bash
# 로컬 서버 실행 (Live Server 또는 Python)
python -m http.server 8000
# 또는 npx serve

# TailwindCSS 빌드 (npm 사용 시)
npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
```

## 아키텍처

정적 웹사이트 구조:
- `index.html`: 메인 이력서 페이지 (단일 페이지 애플리케이션)
- `css/`: 커스텀 스타일시트
- `js/`: JavaScript 모듈 (스크롤 애니메이션, 네비게이션 등)
- `assets/images/`: 이미지 리소스

## 코드 컨벤션

- HTML: 시맨틱 태그 사용 (`header`, `main`, `section`, `footer`)
- CSS: TailwindCSS 유틸리티 클래스 우선, 커스텀 스타일은 최소화
- JavaScript: 모듈 패턴 사용, DOM 조작 시 `querySelector` 활용

## 개발 로드맵

개발 순서는 `ROADMAP.md` 참고. 주요 단계:

1. **Phase 1**: 프로젝트 설정 (폴더 구조, TailwindCSS, 메타 태그)
2. **Phase 2**: 레이아웃 (헤더, 히어로, 메인, 푸터)
3. **Phase 3**: 섹션 개발 (프로필, 기술 스택, 경력, 프로젝트, 학력)
4. **Phase 4**: 스타일링 (컬러 테마, 반응형, 다크모드)
5. **Phase 5**: 인터랙션 (스무스 스크롤, 애니메이션, 모바일 메뉴)
6. **Phase 6**: 마무리 (테스트, 최적화, 배포)

## 이력서 섹션 구성

- 프로필: 이미지, 이름, 직함, 자기소개, 연락처, 소셜 링크
- 기술 스택: 프론트엔드/백엔드 기술, 도구, 스킬 레벨 시각화
- 경력: 타임라인 형식, 회사명, 직책, 기간, 성과
- 프로젝트: 카드 형식, 설명, 기술 태그, 데모/GitHub 링크
- 학력: 학교, 전공, 졸업년도, 자격증
